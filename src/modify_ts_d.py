"""
helper to change ambient reference to d.ts that describes the custom ol package
"""
import requests
import os

r = requests.get("https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/openlayers/index.d.ts")

with open(os.path.join(os.path.dirname(__file__), os.pardir, "tmp", "index.d.ts"), "w", encoding="UTF-8") as f:
    f.write(r.text)


# print(r.text)


#
# import os
#
# openlayers_types = os.path.join(
#     os.path.dirname(__file__), os.pardir,
#     'DefinitelyTyped', 'openlayers', 'openlayers.d.ts')
#
# output_file = os.path.join(
#     os.path.dirname(__file__), os.pardir,
#     'ol', 'ol-build.d.ts')
#
# input_lines = []
# """
# :type: list[str]
# """
#
# with open(openlayers_types, 'r') as original:
#     while True:
#         ln = original.readline().replace('\n', '')
#
#         if ln.find('declare module "openlayers"') > -1:
#             break
#
#         input_lines.append(ln + '\n')
#
# for i in range(len(input_lines)):
#
#     input_lines[i] = input_lines[i].replace('declare module ', 'export declare module ')
#     input_lines[i] = input_lines[i].replace('declare type ', 'export declare type ')
#
# input_lines.append('export default ol;\n')
#
# with open(output_file, 'w') as out_file:
#     out_file.writelines(input_lines)
