/**
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */

//  arr1 = [1, 2, [3, [4]]];

//  arr2 = [1, [[4]]];

//  ->  [1, [[4]]]

function intersection(arr1 = [], arr2 = []) {
  let result = [];

  if (Array.isArray(arr1 && arr2)) {
    arr1.forEach((el) => {
      for (let i = 0; i < arr2.length; i++) {
        console.log(arr2[i])
        if ((el ^ arr2[i]) === 0) {
          result.push(el);
          break;
        }
      }
    });
  }
  return result;
}

//console.log(intersection([1, 2, [3, [4]]], [1, [[4]]]));




