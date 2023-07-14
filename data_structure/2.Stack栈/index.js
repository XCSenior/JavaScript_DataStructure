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
var stack = new Stack(1, 2, 3);
