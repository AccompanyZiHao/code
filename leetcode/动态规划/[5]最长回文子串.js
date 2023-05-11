//给你一个字符串 s，找到 s 中最长的回文子串。 
//
// 如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。 
//
// 
//
// 示例 1： 
//
// 
//输入：s = "babad"
//输出："bab"
//解释："aba" 同样是符合题意的答案。
// 
//
// 示例 2： 
//
// 
//输入：s = "cbbd"
//输出："bb"
// 
//
// 
//
// 提示： 
//
// 
// 1 <= s.length <= 1000 
// s 仅由数字和英文字母组成 
// 
//
// Related Topics 字符串 动态规划 👍 6471 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {string}
 */

// 1. s 长度<=1直接返回s。
// 2. 设置一个max，用来存储最长的回文子串。
// 3.for循环遍历整个s。
//   3.1 找与s[i]相同的邻居。
//     3.1.1要求他们和s[i]是连续的。比如：aaa， i=1，s[0]和s[2]都和s[i]相同。
//     3.1.2 然后开始探测l和r，l和r分别是s[i]的左右两边的索引, s[l-1] == s[i] == s[r+1] 相同则 l-- r++
//   3.2 找不同的邻居
//     3.2.1 判断s[l-1]和s[r+1]是否相同，相同继续探测，不同则跳出循环。
//     3.2.2 判断l和r是否到达边界，到达则跳出循环。
//   3.3  和max比较， 大，则替换
//   3.4 下一轮循环
// 4. 返回max

var longestPalindrome = function (s) {
  let len = s.length;
  // 一个字符或者空字符串，直接返回
  if (len <= 1) return s;
  let max = '';
  for (let i = 0; i < len; i++) {
    let l = i, r = i;
    // 找到和s[i]相同的邻居
    while (l > 0 && s[l - 1] === s[i]) {
      l--;
    }
    while (r < len - 1 && s[r + 1] === s[i]) {
      r++;
    }
    // 邻居不同，左右扩散寻找
    while (s[l - 1] == s[r + 1] && l > 0 && r < len - 1) {
      l--;
      r++;
    }

    if (r - l + 1 > max.length) {
      max = s.slice(l, r + 1);
    }

  }
  return max;
};
longestPalindrome('cbdd');
//leetcode submit region end(Prohibit modification and deletion)
