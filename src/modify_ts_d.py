"""
helper to change ambient reference to d.ts that describes the custom ol package
"""

import os

openlayers_types = os.path.join(
    os.path.dirname(__file__), os.pardir,
    'DefinitelyTyped', 'openlayers', 'openlayers.d.ts')

output_file = os.path.join(
    os.path.dirname(__file__), os.pardir,
    'ol', 'openlayers-npm.d.ts')

input_lines = []
"""
:type: list[str]
"""

with open(openlayers_types, 'r') as original:
    while True:
        ln = original.readline().replace('\n', '')

        if ln.find('declare module "openlayers"') > -1:
            break

        input_lines.append(ln + '\n')

did_replace = False
declare_module = 'declare module ol'
export_module = 'export module ol'

for i in range(len(input_lines)):

    if did_replace:
        continue

    if input_lines[i].find(declare_module) > -1:
        input_lines[i] = input_lines[i].replace(declare_module, export_module)
        did_replace = True


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
