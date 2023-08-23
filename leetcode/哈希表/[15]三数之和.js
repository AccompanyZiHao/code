//给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j !=
//k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
//
// 你返回所有和为 0 且不重复的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
//
//
//
//
// 示例 1：
//
//
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
//解释：
//nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
//nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
//nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
//不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
//注意，输出的顺序和三元组的顺序并不重要。
//
//
// 示例 2：
//
//
//输入：nums = [0,1,1]
//输出：[]
//解释：唯一可能的三元组和不为 0 。
//
//
// 示例 3：
//
//
//输入：nums = [0,0,0]
//输出：[[0,0,0]]
//解释：唯一可能的三元组和为 0 。
//
//
//
//
// 提示：
//
//
// 3 <= nums.length <= 3000
// -10⁵ <= nums[i] <= 10⁵
//
//
// Related Topics 数组 双指针 排序 👍 6265 👎 0


//leetcode submit region begin(Prohibit modification and deletion)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。
// 返回所有和为 0 且不重复的三元组。

//   两层for循环确定 a 和b ，用哈希法来确定 0-(a+b) 是否在 数组里出现过
var threeSum = function (nums) {
  let len = nums.length;
  if (len < 3) return res;
  // 排序 从小到大
  nums.sort((a, b) => a - b);
  // 三数之和为0，那么必定有一个数为负数，一个数为正数，一个数为0
  // 如果最小的数大于0，那么不可能有三数之和为0的情况
  // 如果最大的数小于0，那么不可能有三数之和为0的情况
  // 临界条件
  if (nums[0] > 0) return [];
  if (nums[len - 1] < 0) return [];

  let res = [];

  for (let i = 0; i < len; i++) {
    // 如果当前元素大于0，那么不可能有三数之和为0的情况
    if (nums[i] > 0) return res;

    // 定义 left 和 right 两个指针，left 指向当前元素的下一个元素，right 指向数组的最后一个元素
    let left = i + 1;
    let right = len - 1;
    // 指针移动
    // 如果三数之和小于0，那么 left 指针向右移动
    // 如果三数之和大于0，那么 right 指针向左移动
    // 如果三数之和等于0，那么将这三个数添加到结果数组中，同时 left 和 right 指针都要移动，但是要注意去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        // 去重
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      }
    }
  }
  return res;
};
//leetcode submit region end(Prohibit modification and deletion)
threeSum([-1, 0, 1, 2, -1, -4])
