"""
helper to change ambient reference to d.ts that describes the custom ol package
"""

import os

print(__file__)
print(os.path.dirname(__file__))

openlayers_types = os.path.join(
    os.path.dirname(__file__), os.pardir,
    'DefinitelyTyped', 'openlayers', 'openlayers.d.ts')

output_file = os.path.join(
    os.path.dirname(__file__), os.pardir,
    'lib', 'openlayers-npm.d.ts')

print(openlayers_types)
print(os.path.isdir(openlayers_types))
print(os.path.isfile(openlayers_types))

# exit()


def prepend_export(input_string):
    """
    prepend ol namespace and all interfaces, types, functions, classes and namespaces with export

    :param input_string:
    :type input_string: str
    :return: modified string
    :rtype: str
    """

    candidates = ['declare namespace', '  interface', '  type ', '  function', '  class ', '  namespace']
    """
    :type: list[str]
    """

    for candidate in candidates:
        if input_string.find(candidate) > -1:
            short_candidate = candidate.strip()
            return input_string.replace(short_candidate, 'export ' + short_candidate)

    return input_string

input_lines = []
"""
:type: list{str]
"""


with open(openlayers_types, 'r') as original:
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

with open(output_file, 'w') as out_file:
    out_file.writelines(input_lines)

#
# olx_lines = []
#
# for i in range(len(input_lines)):
#     if input_lines[i].find('namespace ol ') > -1:
#         break
#
#     olx_lines.append(input_lines[i])
#
# olx_lines.append('declare module "openlayers" {\n')
# olx_lines.append('    export = olx;\n')
# olx_lines.append('}\n')
#
# with open(r'..\ol\openlayers-olx.d.ts', 'w') as out_file:
#     out_file.writelines(olx_lines)
