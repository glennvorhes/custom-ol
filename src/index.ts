import * as ol from '../ol/ol-build';
// export const ol = _ol;
// export default ol;
// console.log(ol);

// export const ol = _ol['ol'];

// console.log(_ol['ol']);




// const ol2 = {};
//
// for (let k in _ol){
//     if (_ol.hasOwnProperty(k)){
//         ol2[k] = _ol[k];
//         console.log(k);
//     }
//
// }


console.log(ol);
window['ol'] = ol['ol'];


export default ol;

// namespace ol{
//     export * from '../ol/ol-build'
// }

