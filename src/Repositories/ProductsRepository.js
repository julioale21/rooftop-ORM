"use strict";
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
exports.__esModule = true;
var AbstractRepository_1 = require("./AbstractRepository");
var ProductEntity_1 = require("../Entities/ProductEntity");
var ProductsRepository = /** @class */ (function (_super) {
    __extends(ProductsRepository, _super);
    function ProductsRepository() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.table = "products.json";
        return _this;
    }
    ProductsRepository.prototype.findAll = function () {
        var data = _super.prototype.readTable.call(this, this.table);
        var products = JSON.parse(data);
        return products;
    };
    ProductsRepository.prototype.findById = function (id) {
        return new ProductEntity_1["default"];
    };
    ProductsRepository.prototype.create = function (product) {
        return new ProductEntity_1["default"];
    };
    ProductsRepository.prototype.update = function (id, changes) {
        return true;
    };
    ProductsRepository.prototype["delete"] = function (id) {
        return true;
    };
    return ProductsRepository;
}(AbstractRepository_1["default"]));
exports["default"] = ProductsRepository;
