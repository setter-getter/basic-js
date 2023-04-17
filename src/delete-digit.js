const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = ("" + n).split("").map(Number);
  let minNum = Math.min.apply(null, array);
  let strNum = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] === minNum) {
      continue;
    }
    else {
      strNum += String(array[i]);
    }
  }
  return +strNum
}

module.exports = {
  deleteDigit
};
