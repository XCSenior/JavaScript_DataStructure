// https://leetcode.cn/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
    // 时间复杂度O(n²)  空间复杂度O(1)
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

/* 进阶:有时间复杂度小于O(n²)的方法吗？ */
// 空间换时间,可以在遍历的时候保存已经遍历的信息
//*　由于不需要在意存的信息的顺序,所以不需要用平衡二叉搜索树,用哈希表即可

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = function (nums, target) {
    // 时间复杂度O(n)  空间复杂度O(n)
    const map = new Map();
    map.set(nums[0], 0);
    for (let i = 1; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            //如果有存在相减等于某个key的情况
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
    return [];
};

