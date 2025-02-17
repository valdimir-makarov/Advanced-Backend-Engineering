const _ = require('lodash')


// const convertKeysToCamelCase = (obj) => {
//     if (Array.isArray(obj)) {
//         return obj.map(item => convertKeysToCamelCase(item));
//     } else if (obj !== null && typeof obj === 'object') {
//         return Object.keys(obj).reduce((acc, key) => {
//             const camelKey = _.camelCase(key); // Convert to camelCase
//             acc[camelKey] = convertKeysToCamelCase(obj[key]); // Recursively handle nested objects
//             return acc;
//         }, {});
//     }
//     return obj;
// };
const convertKeysToCamelCase =(obj)=>{
    if (Array.isArray(obj)) {
               return obj.map(item => convertKeysToCamelCase(item));
    }
  else if(obj!==null && typeof obj ==='object'){

    return Object.keys(obj).reduce((accumulate,keys)=>{
        const camelKey = _.camelCase(keys);
        accumulate[camelKey] = convertKeysToCamelCase(obj[keys]);
        return accumulate


    },{})
 }
 return obj;

}

module.exports = convertKeysToCamelCase