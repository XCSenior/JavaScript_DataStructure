// 声明
const arr = new Array(1, 2, 3, 4, 5, 6, 7);
// 字面量声明
const arr2 = [1, 2, 3, 4, 5, 6, 7];

// 根据索引值来进行元素的访问
arr[0];

/**
 * * 1、遍历所有元素：for循环
 */
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(`循环打印arr[${i}]`, arr[i]);
}

/**
 * * 2、数组方法：pop、push、shift、unshift
 */
// （1） pop方法，返回数组被弹出的末尾原始
console.log('arr.pop() :>> ', arr.pop(), arr); // 弹出7, [1, 2, 3, 4, 5, 6]
// （2） push方法，推入末尾一个或多个元素，返回推入成功后的数组长度
console.log('arr.push(8) :>> ', arr.push(8), arr); // 7 [1, 2, 3, 4, 5, 6, 8]
// （3）shift方法，返回被弹出的头部元素
console.log('arr.shift() :>> ', arr.shift(), arr); // 1 [2, 3, 4, 5, 6, 8]
// （4）unshift方法，推入头部一个或多个元素，返回推入成功后的数组长度
console.log('arr.unshift(999), arr :>> ', arr.unshift(999), arr); // 7 [999, 2, 3, 4, 5, 6, 8]



/**
 * * 3、数组插入删除方法
 */
// （1）splice方法，直接修改原数组，返回被删除的元素
console.log('arr.splice(0, 2, "你好"), arr :>> ', arr.splice(0, 2, '你好'), arr); //) [999, 2] ['你好', 3, 4, 5, 6, 8]

// （2）slice方法，只返回修改后的新数组，不修改原数组


/**
 * * 4、数组自带排序方法sort
 * */
// （1）sort
const arr3 = [49,38,65,97,76,13,27,49];
console.log('arr3.sort() === arr3 :>> ', arr3.sort((a, b) => {
    // return a - b; // 从小到大
    return b - a; // 从大到小
}) === arr3); // 返回相同的引用


// （1）sort
const arr4 = [49,38,65,97,76,13,27,49];
console.log('arr4.toSorted() === arr4 :>> ', arr4.toSorted((a, b) => {
    // return a - b; // 从小到大
    return b - a; // 从大到小
}) === arr4); // 返回排序后的新数组，引用与原数组不一样



/**
 ** 5、数组迭代（遍历方法）
 */
// （1）every 和 some  做结果检验
const result1 = arr4.every(item => item > 0); true
// （2）
// （3）
// （4）
// （5）








