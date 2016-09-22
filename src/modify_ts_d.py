"""
helper to change ambient reference to d.ts that describes the custom ol package
"""


def prepend_export(input_string):
    """
    prepend ol namespace and all interfaces, types, functions, classes and namepsaces with export

    :param input_string:
    :type input_string: str
    :return: modified string
    :rtype: str
    """

    candidates = ['declare namespace', '  interface', '  type ', '  function', '  class ', '  namespace']
    """
    :type: list[str]
    """

    for cand in candidates:
        if input_string.find(cand) > -1:
            short_cand = cand.strip()
            return input_string.replace(short_cand, 'export ' + short_cand)

    return input_string

input_lines = []
"""
:type: list{str]
"""


with open(r'openlayers.d.ts', 'r') as original:
    while True:
        ln = original.readline().replace('\n', '')

        if ln.find('declare module') > -1:
            break

        input_lines.append(ln + '\n')

# flag to add exports after ol namespace is founc
add_exports = False

for i in range(len(input_lines)):
    if not add_exports:
        add_exports = input_lines[i].find('namespace ol ') > -1

    if add_exports:
        input_lines[i] = prepend_export(input_lines[i])

with open(r'..\ol\openlayers-npm.d.ts', 'w') as out_file:
    out_file.writelines(input_lines)


olx_lines = []

for i in range(len(input_lines)):
    if input_lines[i].find('namespace ol ') > -1:
        break

    olx_lines.append(input_lines[i])

olx_lines.append('declare module "openlayers" {\n')
olx_lines.append('    export = olx;\n')
olx_lines.append('}\n')

with open(r'..\ol\openlayers-olx.d.ts', 'w') as out_file:
    out_file.writelines(olx_lines)
