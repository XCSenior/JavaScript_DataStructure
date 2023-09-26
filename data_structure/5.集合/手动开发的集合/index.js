/**
 * 集合：一组“无序”且“唯一”（不重复）的项组成的数据结构
 * 有add、delete、has、clear、size、values所有集合的数值
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MySet_items;
var MySet = /** @class */ (function () {
    function MySet() {
        _MySet_items.set(this, new Map()); // 创建一个对象进行集合的管理
    }
    ;
    MySet.prototype.add = function (targetVal) {
        if (this.has(targetVal)) {
            return false;
        }
        else {
            __classPrivateFieldGet(this, _MySet_items, "f").set(targetVal, targetVal);
            return true;
        }
    };
    ;
    MySet.prototype.get = function (key) {
        return __classPrivateFieldGet(this, _MySet_items, "f").get(key);
    };
    ;
    MySet.prototype.delete = function (targetVal) {
        if (this.has(targetVal)) {
            return __classPrivateFieldGet(this, _MySet_items, "f").delete(targetVal);
        }
        else {
            return false;
        }
    };
    ;
    MySet.prototype.has = function (targetVal) {
        return __classPrivateFieldGet(this, _MySet_items, "f").has(targetVal);
    };
    ;
    MySet.prototype.clear = function () {
        __classPrivateFieldGet(this, _MySet_items, "f").clear();
        return true;
    };
    ;
    Object.defineProperty(MySet.prototype, "size", {
        get: function () {
            return __classPrivateFieldGet(this, _MySet_items, "f").size;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return MySet;
}());
_MySet_items = new WeakMap();
var mySet = new MySet();
