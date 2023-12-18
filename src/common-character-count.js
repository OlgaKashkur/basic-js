const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;

  const s11 = [...s1].sort();
  const s22 = [...s2].sort();

  let lastIndex;
  if (s22.length < s11.length) {
    for (let i = 0; i < s11.length; i++) {
      lastIndex = s22.lastIndexOf(s11[i]);
      if (lastIndex !== -1) {
        res++;
        s22.splice(lastIndex - 1, 1);
      }
    }
  } else {
    for (let i = 0; i < s22.length; i++) {
      lastIndex = s11.lastIndexOf(s22[i]);
      if (lastIndex !== -1) {
        res++;
        s11.splice(lastIndex - 1, 1);
      }
    }
  }
  return res;
}

module.exports = {
  getCommonCharacterCount,
};
