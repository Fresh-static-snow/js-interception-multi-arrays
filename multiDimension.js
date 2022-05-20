/**
 * @param {Array} a
 * @param {Array} b
 * @returns {Array}
 */

//  arr1 = [1, 2, [3, [4]]];

//  arr2 = [1, [[4]]];

//  ->  [1, [[4]]]

//  MY RESULT -> [1,4]

function intersection(arr1 = [], arr2 = []) {
  let result = [];
  let count = 0
  if (Array.isArray(arr1 && arr2)) {
    let deepFlat = (arr) => {
      let res = [];
      arr.forEach((el) => {
        if (Array.isArray(el)) {
          res = [...res, ...deepFlat(el)];
          console.log(count++)
        } else {
          res = [...res, el];
        }
      });
      return res;
    };

    let a1 = deepFlat(arr1);
    let a2 = deepFlat(arr2);
    
    a1.forEach((el) => {
      for (let i = 0; i < a2.length; i++) {
        if ((el ^ arr2[i]) === 0) {
          result.push(el);
          break;
        }
      }
    });
  }
  return result;
}

//n - dimension
//console.log(intersection([1, 2, [3, [4]]], [1, [[4]]])); // => [1, [[4]]] // I've got => [1,4]

// single - dimension
//console.log(intersection([1, 2, 3, 4], [4, 3, 2, 1]));

module.exports = intersection;
