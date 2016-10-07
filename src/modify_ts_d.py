"""
helper to change ambient reference to d.ts that describes the custom ol package
"""

import os

openlayers_types = os.path.join(
    os.path.dirname(__file__), os.pardir,
    'DefinitelyTyped', 'openlayers', 'openlayers.d.ts')

output_file = os.path.join(
    os.path.dirname(__file__), os.pardir,
    'ol', 'ol-build.d.ts')

# output_olx = os.path.join(
#     os.path.dirname(__file__), os.pardir,
#     'src', 'olx1.ts')

input_lines = []
"""
:type: list[str]
"""
#
# olx_lines = [
#     "import {ol} from '../ol/ol-build';\n\n",
#     "export type GlobalObject = Object;\n\n"
#
# ]
# """
# :type: list[str]
# """

with open(openlayers_types, 'r') as original:
    while True:
        ln = original.readline().replace('\n', '')

        if ln.find('declare module "openlayers"') > -1:
            break

        input_lines.append(ln + '\n')

# declare_module_ol = 'declare module ol'
# declare_module_olx = 'declare module olx'
# export_module = 'export module ol'

prefix = '   '
suffix = ' '
candidates = ["module", "interface", "function", "class", "type"]
candidates_replace = ['export ' + c for c in candidates]
candidates = [prefix + c + suffix for c in candidates]
candidates_replace = [prefix + c + suffix for c in candidates_replace]

add_olx = False

for i in range(len(input_lines)):
    #
    # if skip:
    #     continue
    #
    # if input_lines[i].find("declare module olx") > -1:
    #     skip = True
    #     continue
    #
    # input_lines[i] = input_lines[i].replace("declare module ol", "export declare module ol")



    # if input_lines[i].find(declare_module_ol) > -1:
    #     input_lines[i] = input_lines[i].replace(declare_module_ol, export_module)

    # if input_lines[i].find('@namespace olx') > -1:
    #     break
    #

    # if not add_olx:
    #     if input_lines[i].find('declare module olx') > -1:
    #         add_olx = True
    #
    # if add_olx:
    #     olx_lines.append(input_lines[i])

    input_lines[i] = input_lines[i].replace('declare module ', 'export declare module ')
    input_lines[i] = input_lines[i].replace('declare type ', 'export declare type ')

    # for j in range(len(candidates)):
    #     if input_lines[i].find(candidates[j]):
    #         input_lines[i] = input_lines[i].replace(candidates[j], candidates_replace[j])



        #
    # input_lines[i] = input_lines[i].replace('export module', 'export namespace')



input_lines.append('export default ol;\n')

with open(output_file, 'w') as out_file:
    out_file.writelines(input_lines)
#
# for i in range(len(olx_lines)):
#     olx_lines[i] = olx_lines[i].replace('declare module olx', 'export module olx')
#     olx_lines[i] = olx_lines[i].replace('   module', '   export module')
#     olx_lines[i] = olx_lines[i].replace('   interface', '   export interface')
#     olx_lines[i] = olx_lines[i].replace('   type ', '   export type ')
#
# # print(olx_lines)
#
#
# with open(output_olx, 'w') as out_file:
#     out_file.writelines(olx_lines)
#


