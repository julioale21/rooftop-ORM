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
var AbstractRepository_1 = require("./AbstractRepository");
var fs_1 = require("fs");
var path_1 = require("path");
var ProductMapper_1 = require("../DataMappers/ProductMapper");
var ProductsRepository = /** @class */ (function (_super) {
    __extends(ProductsRepository, _super);
    function ProductsRepository() {
        var _this = _super.call(this) || this;
        _this.table = "products.json";
        var content = fs_1.readFileSync(path_1.resolve(__dirname, "../../" + _this.table), { encoding: "utf-8" });
        var json = JSON.parse(content);
        var mapper = new ProductMapper_1["default"];
        _this.data = json.map(function (item) {
            return mapper.mapObjectToEntity(item);
        });
        return _this;
    }
    return ProductsRepository;
}(AbstractRepository_1["default"]));
exports["default"] = ProductsRepository;
