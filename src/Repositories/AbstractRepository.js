"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var AbstractRepository = /** @class */ (function () {
    function AbstractRepository() {
    }
    AbstractRepository.prototype.readTable = function (table) {
        var data = fs.readFileSync(path.resolve(__dirname, "../../" + table), { encoding: "utf-8" });
        return data;
    };
    ;
    return AbstractRepository;
}());
exports["default"] = AbstractRepository;
