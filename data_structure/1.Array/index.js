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
// （1）every 和 some  做条件检验，every则是所有元素都满足，some则是满足一个即可true
arr4.every(item => item > 0); // true
arr4.some(item => item === 49); // true
// （2）filter 过滤出来满足条件元素的浅拷贝数组
arr4.filter(item => item > 20);
// （3）map创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
arr4.map(item => item *2);
// （4）forEach简单遍历，不改变原数组的值（对象除外）
const objArr = [
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    { a: 1, b: 2 },
]
objArr.forEach(item => item.a = 3); // 数组里面的对象属性a的值变成了3
// （5）reduce数组中的每个元素按序执行一个提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
const total = arr4.reduce((preVal, currentVal) => preVal + currentVal, 0);

// （6）Array.from() 静态方法从可迭代或类数组对象创建一个新的浅拷贝的数组实例。
Array.from({ 0: 'a', 1: 'b' });
// （7）includes 过滤出来满足条件元素的浅拷贝数组
[10, 21, 33].includes(1); // false

// （8）搜索方法1：indexOf、lastIndexOf
// （9）搜索方法2：find、findIndex、findLastIndex
// （8）
// （8）






