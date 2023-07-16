var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
/**
 * *栈的基本方法
 * ? 1、push：推入元素至栈顶
 * ? 2、pop：栈顶元素出栈
 * ? 3、peek：返回栈顶元素
 *
 * ? 4、isEmpty：判断是否为空栈
 * ? 5、clear：清空栈
 * ? 6、size属性：栈的长度
 */
var Stack = /** @class */ (function () {
    function Stack() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.items = __spreadArray([], args, true);
    }
    // 推入元素至栈顶
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    ;
    // 栈顶元素出栈
    Stack.prototype.push = function (data) {
        this.items.push(data);
    };
    ;
    // 返回栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
        // return this.items.at(-1);
    };
    ;
    Object.defineProperty(Stack.prototype, "isEmpty", {
        // 判断是否为空栈
        get: function () {
            return this.items.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    ;
    // 清空栈
    Stack.prototype.clear = function () {
        this.items = [];
    };
    ;
    Object.defineProperty(Stack.prototype, "size", {
        // 栈的长度
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    return Stack;
}());
/**
* 栈结构的应用
* @param { number } decNumber 被转换的十进制数
* @returns { string } 转换后的二进制数
*/
// 辗转相除法，求十进制转成二进制数字
var convertBinary = function (decNumber) {
    var tempStack = new Stack();
    var tempNumber = decNumber;
    var convertedString = "";
    // 辗转相除
    while (tempNumber > 0) {
        // 将取余数放入栈中
        tempStack.push(tempNumber % 2);
        // 对tempNumber除目标进制数，并向下取整
        tempNumber = Math.floor(tempNumber / 2);
    }
    ;
    // 获取目标进制的字符串数值
    while (!tempStack.isEmpty) {
        convertedString += tempStack.pop();
    }
    ;
    return convertedString;
};
