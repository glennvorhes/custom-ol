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

# declare_module_ol = 'declare module ol'
# declare_module_olx = 'declare module olx'
# export_module = 'export module ol'

prefix = '   '
suffix = ' '
candidates = ["module", "interface", "function", "class", "type"]
candidates_replace = ['export ' + c for c in candidates]
candidates = [prefix + c + suffix for c in candidates]
candidates_replace = [prefix + c + suffix for c in candidates_replace]

skip = False

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


    input_lines[i] = input_lines[i].replace('declare module ', 'export declare module ')
    input_lines[i] = input_lines[i].replace('declare type ', 'export declare type ')

    # for j in range(len(candidates)):
    #     if input_lines[i].find(candidates[j]):
    #         input_lines[i] = input_lines[i].replace(candidates[j], candidates_replace[j])



        #
    # input_lines[i] = input_lines[i].replace('export module', 'export namespace')

    pass

# input_lines.append('export default ol;\n')


with open(output_file, 'w') as out_file:
    out_file.writelines(input_lines)

