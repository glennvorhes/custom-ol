declare function require(id: string);
export const ol = require('../ol/ol-build');


// // export default require('../ol/ol-build');
//
// const fish = 10;
// export = fish;
//
//
// export function cat(bird: string){
//     console.log('eat the fish')
// }
//
// export function nice(eat: number){
//     console.log('eat that fish');
// }
//
// export class Big{
//     glenn: string;
//
//     constructor(isGlenn){
//         this.glenn  = isGlenn;
//     }
//
//     set isGlenn(f: string){
//         console.log(this.glenn)
//     }
//
//     run(){
//         console.log(this.glenn + " can run");
//     }
// }
//
// export namespace HereIt{
//
//     export class Big2 {
//         glenn: string;
//
//         constructor(isGlenn) {
//             this.glenn = isGlenn;
//         }
//
//         set isGlenn(f: string) {
//             console.log(this.glenn)
//         }
//
//         run() {
//             console.log(this.glenn + " can run");
//         }
//     }
//
//
// }