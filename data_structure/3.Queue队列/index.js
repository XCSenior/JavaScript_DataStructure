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
 * *队列的基本方法
 * ? 1、enqueue：元素至队尾
 * ? 2、dequeue：队头元素出队
 * ? 3、getFront：返回栈顶队头元素
 *
 * ? 4、isEmpty：判断是否为空队列
 * ? 5、clear：清空队列
 * ? 6、size属性：队列的长度
 */
var Queue = /** @class */ (function () {
    function Queue() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.items = __spreadArray([], args, true);
    }
    ;
    // dequeue出队
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    ;
    // enqueue入队
    Queue.prototype.enqueue = function (data) {
        return this.items.push(data);
    };
    ;
    // getFront获取队头元素
    Queue.prototype.getFront = function () {
        return this.items[0];
    };
    ;
    Object.defineProperty(Queue.prototype, "isEmpty", {
        // 判断是否为空队列
        get: function () {
            return this.items.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    ;
    // 清空队列
    Queue.prototype.clear = function () {
        this.items = [];
    };
    ;
    Object.defineProperty(Queue.prototype, "size", {
        // 队列的长度
        get: function () {
            return this.items.length;
        },
        enumerable: false,
        configurable: true
    });
    return Queue;
}());
// 击鼓传花游戏
function game(list, num) {
    var tempQueue = new (Queue.bind.apply(Queue, __spreadArray([void 0], list, false)))();
    var count = 0; // 可统计在第几轮游戏中，谁出局了
    while (tempQueue.size > 1) {
        for (var i = 0; i < num; i++) {
            // 出队，压入队尾
            tempQueue.enqueue(tempQueue.dequeue());
        }
        console.log("\u5728\u7B2C".concat(++count, "\u8F6E\u51FB\u9F13\u4F20\u82B1\u6E38\u620F\u4E2D\uFF0C").concat(tempQueue.dequeue(), "\u51FA\u5C40\u4E86\uFF01"));
    }
    console.log("\u6700\u540E\u83B7\u80DC\u7684\u73A9\u5BB6\u662F\uFF1A".concat(tempQueue.getFront()));
    return tempQueue.getFront();
}
game(["kerwin", "xiaoming", "tiechui", "gangdear", "guludunzi"], 7);
