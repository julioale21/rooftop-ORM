"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Entity_1 = require("./Entity");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = "";
        _this.description = "";
        _this.price = "";
        _this.brand = "";
        _this.stock = 0;
        _this.is_visible = false;
        return _this;
    }
    Product.prototype.getTitle = function () {
        return this.title;
    };
    Product.prototype.setTitle = function (title) {
        this.title = title;
    };
    Product.prototype.getDescription = function () {
        return this.description;
    };
    Product.prototype.setDescription = function (description) {
        this.description = description;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.getBrand = function () {
        return this.brand;
    };
    Product.prototype.setBrand = function (brand) {
        this.brand = brand;
    };
    Product.prototype.getStock = function () {
        return this.stock;
    };
    Product.prototype.setStock = function (stock) {
        this.stock = stock;
    };
    Product.prototype.isIs_visible = function () {
        return this.is_visible;
    };
    Product.prototype.setIs_visible = function (is_visible) {
        this.is_visible = is_visible;
    };
    return Product;
}(Entity_1["default"]));
exports["default"] = Product;
