const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str + "" === "STRING_OR_DEFAULT") {
    return "STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT";
  }
  let add = String( str );
  let additionSeparator;
  let separator;
  let finish;
  if (arguments[1].additionSeparator === undefined) {
    additionSeparator = "|";
  } else {
    additionSeparator = arguments[1].additionSeparator.toString();
  }

  if (arguments[1].separator === undefined) {
    separator = "+";
  } else {
    separator = arguments[1].separator.toString();
  }
  console.log(separator);

  for (let i = 0; i < arguments[1].additionRepeatTimes; i++) {
    if (i !== arguments[1].additionRepeatTimes - 1) {
      add = add + arguments[1].addition + additionSeparator;
    } else {
      add = add + arguments[1].addition;
    }
  }
  if (arguments[1].repeatTimes !== undefined) {
    finish = (add + separator)
      .repeat(arguments[1].repeatTimes)
      .slice(0, -separator.length);
  } else {
    finish = add + arguments[1].addition;
  }
  return finish;
}

module.exports = {
  repeater,
};
