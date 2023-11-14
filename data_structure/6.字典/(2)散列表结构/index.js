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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Dictionary2_instances, _Dictionary2_table, _Dictionary2_convertKeyToString;
/* 用来作为存储value的数据类型 */
var ValuePair2 = /** @class */ (function () {
    function ValuePair2(key, value) {
        this.key = key;
        this.value = value;
    }
    return ValuePair2;
}());
var Dictionary2 = /** @class */ (function () {
    function Dictionary2() {
        _Dictionary2_instances.add(this);
        // 私有属性：作为暂存对象的值
        _Dictionary2_table.set(this, void 0);
        __classPrivateFieldSet(this, _Dictionary2_table, {}, "f");
    }
    ;
    ;
    // 1、判断是否有这个键
    Dictionary2.prototype.hasKey = function (rawKey) {
        return Boolean(__classPrivateFieldGet(this, _Dictionary2_table, "f")[String(__classPrivateFieldGet(this, _Dictionary2_instances, "m", _Dictionary2_convertKeyToString).call(this, rawKey))]);
    };
    ;
    // 2、设置键值对方法
    Dictionary2.prototype.set = function (rawKey, value) {
        if (rawKey && value) {
            __classPrivateFieldGet(this, _Dictionary2_table, "f")[String(__classPrivateFieldGet(this, _Dictionary2_instances, "m", _Dictionary2_convertKeyToString).call(this, rawKey))] = new ValuePair2(rawKey, value);
            return true;
        }
        else {
            return false;
        }
    };
    ;
    // 3、获取目标键值对的方法
    Dictionary2.prototype.get = function (rawKey) {
        return __classPrivateFieldGet(this, _Dictionary2_table, "f")[String(__classPrivateFieldGet(this, _Dictionary2_instances, "m", _Dictionary2_convertKeyToString).call(this, rawKey))];
    };
    ;
    // 4、移除目标键值对的方法
    Dictionary2.prototype.remove = function (rawKey) {
        return Reflect.deleteProperty(__classPrivateFieldGet(this, _Dictionary2_table, "f"), String(__classPrivateFieldGet(this, _Dictionary2_instances, "m", _Dictionary2_convertKeyToString).call(this, rawKey)));
    };
    ;
    // 5、清除对象
    Dictionary2.prototype.clear = function () {
        __classPrivateFieldSet(this, _Dictionary2_table, {}, "f");
    };
    ;
    Object.defineProperty(Dictionary2.prototype, "size", {
        // 6、返回长度
        get: function () {
            return Object.entries(__classPrivateFieldGet(this, _Dictionary2_table, "f")).length;
        },
        enumerable: false,
        configurable: true
    });
    return Dictionary2;
}());
_Dictionary2_table = new WeakMap(), _Dictionary2_instances = new WeakSet(), _Dictionary2_convertKeyToString = function _Dictionary2_convertKeyToString(rawKey) {
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
    else {
        returnStrKey = JSON.stringify(rawKey);
    }
    return returnStrKey;
};
var dictionary2 = new Dictionary2();
var shabiObj2 = { "shabi": "obj" };
dictionary2.set("nihaoshabi", "nihaoValue");
dictionary2.set(shabiObj2, "shabiObjValue");
console.log('dictionary2 :>> ', dictionary2);
