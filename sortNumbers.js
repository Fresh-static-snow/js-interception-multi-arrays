/**
 * @param {Array<Number>} arr
 * @returns {Array<Number>}
 */

module.exports = function sortNumbers(arr) {
  
  let first = arr.filter(num => num % 2 === 0 ).sort((a,b) => a - b) //ascending
  let second = arr.filter(num => num % 2 ).sort((a,b) => b - a) // des
  return [...first, ...second]
};
// -> [4, 6, 12, 7, 3, 1]

