var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Phone = /** @class */ (function () {
    function Phone(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    Phone.prototype.call = function () {
        console.log("我能打电话。");
    };
    return Phone;
}());
var SmartPhone = /** @class */ (function (_super) {
    __extends(SmartPhone, _super);
    function SmartPhone(brand, price, color, size) {
        var _this = _super.call(this, brand, price) || this;
        _this.color = color;
        _this.size = size;
        return _this;
    }
    return SmartPhone;
}(Phone));
