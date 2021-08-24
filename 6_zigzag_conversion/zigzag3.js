var convert = function (s, numRows) {
  /* base case since 1 * 2 - 2 = 0 */
  if (numRows === 1) return s;

  let result = "";
  let period = numRows * 2 - 2;
  let diff1 = period,
    diff2 = 0;

  for (let i = 0; i < numRows; i++) {
    /* every group begins at the ith letter of 's' */
    let currStrIdx = i;

    /* Used a flag to signify which of the diff pair should increment the index (defaulted to first) */
    let useFirst = true;

    /* handles each group */
    while (currStrIdx < s.length) {
      /* If diff1 is 0, stay as diff 2, or if diff2 is 0, stay as diff1, otherwise no change */
      useFirst = diff2 === 0 ? true : diff1 === 0 ? false : useFirst;

      /* add current letter to result string */
      result += s[currStrIdx];

      /* increment the index to the next position in 's' based on diff pair pattern */
      useFirst ? (currStrIdx += diff1) : (currStrIdx += diff2);

      /* switch between first or second of diff pairs */
      useFirst = !useFirst;
    }

    /* after each pass, decrement diff1 by 2 and increment diff2 by 2 */
    diff1 -= 2;
    diff2 += 2;
  }

  return result;
};

module.exports = convert;
