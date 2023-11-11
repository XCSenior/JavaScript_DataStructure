/**
 * 手动实现映射表，要求键名可以存任何数据结构，如字符串、数值、对象等
 * 常见方法有：
 * get获取方法
 * set设置方法
 * remove移除方法
 */
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Dictionary_instances, _Dictionary_table, _Dictionary_convertKeyToString;
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        _Dictionary_instances.add(this);
        // 私有属性：作为暂存对象的值
        _Dictionary_table.set(this, void 0);
        __classPrivateFieldSet(this, _Dictionary_table, {}, "f");
    }
    ;
    ;
    // 1、判断是否有这个键
    Dictionary.prototype.hasKey = function () { };
    ;
    // 2、设置键值对方法
    Dictionary.prototype.set = function () { };
    ;
    // 3、获取目标键值对的方法
    Dictionary.prototype.get = function () { };
    ;
    // 4、移除目标键值对的方法
    Dictionary.prototype.remove = function () { };
    ;
    return Dictionary;
}());
_Dictionary_table = new WeakMap(), _Dictionary_instances = new WeakSet(), _Dictionary_convertKeyToString = function _Dictionary_convertKeyToString(rawKey) {
    var returnStrKey = "";
    if (rawKey === null) {
        returnStrKey = "null";
    }
    else if (rawKey === undefined) {
        returnStrKey = "undefined";
    }
    else if (typeof rawKey === 'string' || rawKey instanceof String) {
        returnStrKey = rawKey;
    }
    return returnStrKey;
};
var dictionary = new Dictionary();
console.log('dictionary :>> ', dictionary);
