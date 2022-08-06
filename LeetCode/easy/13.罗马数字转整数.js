// https://leetcode.cn/problems/roman-to-integer/

/**
 * @param {string} str
 * @return {number}
 */
const romanToInt = function (str) {
    const enumRoman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    const checkChar = Object.keys(enumRoman)
    for (let i = 0; i < str.length; i++) {
        /* 含非法字符 */
        if (!checkChar.includes(str[i])) {
            return 0
        }
    }
    /* 检查str合理性 */
    let sum = 0;
    for (let i = 0; i < str.length - 1; i++) {
        if (enumRoman[str[i]] < enumRoman[str[i + 1]]) {
            sum -= enumRoman[str[i]];
            continue;
        }
        sum += enumRoman[str[i]];
    }
    sum += enumRoman[str[str.length - 1]];   // 最后的收尾，加上最后一位字符的值
    return sum;
};

console.log(romanToInt("III"));