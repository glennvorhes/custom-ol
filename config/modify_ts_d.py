"""
helper to change ambient reference to d.ts that describes the custom ol package
"""
import requests
import os

r = requests.get("https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/openlayers/index.d.ts")


file_text = r.text

file_lines = file_text.split('\n')
out_lines = []

for f in file_lines:
    if f.find('declare module "openlayers"') > -1:
        break

    # if f.find('declare module ') > -1:
    #     f = "export " + f

    out_lines.append(f)

out_lines.append("export = ol;")

with open(os.path.join(os.path.dirname(__file__), os.pardir, "lib", "index.d.ts"), "w", encoding="UTF-8") as f:
    f.write('\n'.join(out_lines))


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
#     'ol', 'openlayers.d.ts')
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
