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
var ProductEntity_1 = require("../Entities/ProductEntity");
var AbstractMapper_1 = require("./AbstractMapper");
var ProductMapper = /** @class */ (function (_super) {
    __extends(ProductMapper, _super);
    function ProductMapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductMapper.prototype.mapObjectToEntity = function (obj) {
        var product = new ProductEntity_1["default"];
        product.setId(obj.id);
        product.setTitle(obj.title);
        product.setDescription(obj.description);
        product.setPrice(obj.price);
        product.setBrand(obj.brand);
        product.setStock(obj.stock);
        product.setIs_visible(obj.is_visible);
        return product;
    };
    return ProductMapper;
}(AbstractMapper_1["default"]));
exports["default"] = ProductMapper;
