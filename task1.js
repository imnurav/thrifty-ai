// Task 1: DSA – Longest Palindromic Substring
// Problem Statement:
// Given a string s, return the longest substring of s that is a palindrome.
// Constraints:
// • 1 <= length of s <= 1000
// • If multiple answers exist, return any one of them.
// Example 1:
// Input: "babad"
// Output: "bab"
// (Note: "aba" is also a valid answer)

function longestPalindromeSubstring(s) {
  if (s.length <= 1) return s;

  let start = 0,
    end = 0;

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i);
    const len2 = expandAroundCenter(i, i + 1);
    const len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return s.substring(start, end + 1);
}
console.log(longestPalindromeSubstring("babad"));
