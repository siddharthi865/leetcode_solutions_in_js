/*
  Given a string s, return the longest palindromic substring in s.

  Example 1:

  Input: s = "babad"
  Output: "bab"
  Note: "aba" is also a valid answer.
  Example 2:

  Input: s = "cbbd"
  Output: "bb"
  Example 3:

  Input: s = "a"
  Output: "a"
  Example 4:

  Input: s = "ac"
  Output: "a"
  

  Constraints:

  1 <= s.length <= 1000
  s consist of only digits and English letters (lower-case and/or upper-case),
 */

var longestPalindrome = function(s) {
  let maxLen = 0, maxStart = -1, maxEnd = -1;
  for (let i = 0; i < s.length; i++) {
    let [evenStart, evenEnd] = longest(i, i+1, s);
    let [oddStart, oddEnd] = longest(i, i, s);
    if (evenEnd - evenStart + 1 > maxLen) {
      maxLen = evenEnd - evenStart + 1;
      maxStart = evenStart;
      maxEnd = evenEnd;
    }
    if (oddEnd - oddStart + 1 > maxLen) {
      maxLen = oddEnd - oddStart + 1;
      maxStart = oddStart;
      maxEnd = oddEnd;
    }
  }
  return s.substring(maxStart, maxEnd + 1);
};

function longest(start, end, s) {
  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start--, end++;
  }
  return [start+1, end-1];
}

module.exports = longestPalindrome;