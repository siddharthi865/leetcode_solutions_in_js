/*
  Given a string s, find the length of the longest substring without repeating characters.

 

  Example 1:

  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.
  Example 2:

  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.
  Example 3:

  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.
  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
  Example 4:

  Input: s = ""
  Output: 0
  

  Constraints:

  0 <= s.length <= 5 * 104
  s consists of English letters, digits, symbols and spaces.
 */

var lengthOfLongestSubstring = function(s) {
  let visited = new Set();
  let longest = 0;
  let l = 0;
  for(let r = 0; r < s.length; r++){
    while(visited.has(s[r])){
      visited.delete(s[l]);
      l++;
    }
    visited.add(s[r]);
    longest = Math.max(longest, r - l + 1);
  }
  return longest;
};

module.exports = lengthOfLongestSubstring;