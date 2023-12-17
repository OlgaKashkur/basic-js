const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
   
  if (!date) {
    return "Unable to determine the time of year!";
  }
  if ((Object.keys(date) + '').includes('toString') ||
    !(date instanceof Date) ||
    Number.isNaN(date)
  ) {
    throw new Error("Invalid date!");
  }
  if (
    date.getUTCMonth() === 0 ||
    date.getUTCMonth() === 1 ||
    date.getUTCMonth() === 11
  ) {
    return "winter";
  }
  if (
    date.getUTCMonth() === 2 ||
    date.getUTCMonth() === 3 ||
    date.getUTCMonth() === 4
  ) {
    return "spring";
  }
  if (
    date.getUTCMonth() === 5 ||
    date.getUTCMonth() === 6 ||
    date.getUTCMonth() === 7
  ) {
    return "summer";
  }
  if (
    date.getUTCMonth() === 8 ||
    date.getUTCMonth() === 9 ||
    date.getUTCMonth() === 10
  ) {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
