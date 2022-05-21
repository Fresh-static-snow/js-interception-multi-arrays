
/**
 * @param {String} str
 * @returns {Boolean}
 */
 module.exports = function isBalanced(string) {
  if(!string ) return true
  const arr = string.split("");
  let open = [];

  const openBrackets = {
    "(": true,
    "[": true,
    "{": true
  };

  const closedBrackets = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (let i = 0, length = arr.length; i < length; i++) {
    if (openBrackets[arr[i]]) {
      open.push(arr[i]);
    } else if (
      closedBrackets[arr[i]] &&
      open.pop() !== closedBrackets[arr[i]]
    ) {
      return false;
    }
  }

  return !open.length 
};

// expect(isBalanced("")).toBe(true);
//   expect(isBalanced()).toBe(true);
//   expect(isBalanced("empty")).toBe(true);
