"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var ProductsRepository_1 = require("./src/Repositories/ProductsRepository");
var productRepository = new ProductsRepository_1["default"];
var app = express();
app.use(bodyParser.urlencoded({ extented: false }));
app.use(bodyParser.json());
app.get("/", function (req, res) {
    return res.json({ message: "hola" });
});
app.get("/products", function (req, res) {
    var products = productRepository.findAll();
    var results = __spreadArray([], products);
    if (Object.keys(req.query).length > 0) {
        if (req.query.price_min) {
            results = results.filter(function (product) {
                return Number(product.price.replace("$", "")) >= Number(req.query.price_min);
            });
        }
        ;
        if (req.query.price_max) {
            results = results.filter(function (product) {
                return Number(product.price.replace("$", "")) <= req.query.price_min;
            });
        }
    }
    else {
        console.log("entro");
        results = results.slice(0, 10);
    }
    if (req.query.hasOwnProperty("page") && req.query.page > 0) {
        var start = (req.query.page * 10);
        var end = start + 9;
        results = results.slice(start, end);
    }
    return res.status(200).json(results);
});
app.listen(3000);
