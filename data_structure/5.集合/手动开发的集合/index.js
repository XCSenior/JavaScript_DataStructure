/**
 * 集合：一组“无序”且“唯一”（不重复）的项组成的数据结构
 * 有add、delete、has、clear、size、values所有集合的数值
 */
var mySet = /** @class */ (function () {
    function mySet() {
        this.items = {}; // 创建一个对象进行集合的管理
    }
    ;
    mySet.prototype.add = function () {
        return false;
    };
    ;
    mySet.prototype.delete = function () {
    };
    ;
    mySet.prototype.has = function () {
        return false;
    };
    ;
    mySet.prototype.clear = function () {
        this.items = {};
        return true;
    };
    ;
    Object.defineProperty(mySet.prototype, "size", {
        get: function () {
            return Object.keys(this.items).length;
        },
        enumerable: false,
        configurable: true
    });
    ;
    return mySet;
}());
