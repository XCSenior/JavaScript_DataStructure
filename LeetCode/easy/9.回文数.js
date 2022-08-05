// https://leetcode.cn/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
// 解题思路:1、0是回文数    2、负数一定不是回文数  3、能被10整除的不是回文数
//*　　　利用while循环，余10取值位数
const isPalindrome = function (x) {
    if (x === 0) {  //!　注意执行顺序，应该首先判断是否为0
        return true
    }
    if (x < 0 || x % 10 === 0) {
        return false
    }
    let reverse = 0;
    let test = x;
    while (test / 10 != 0 ) {
        let num = test % 10
        reverse = reverse * 10 + num
        test = Math.floor(test / 10)
    }
    return reverse === x
};

console.log(isPalindrome(12541));