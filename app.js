"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var ProductsRepository_1 = require("./src/Repositories/ProductsRepository");
var ProductMapper_1 = require("./src/DataMappers/ProductMapper");
var productRepository = new ProductsRepository_1["default"];
var mapper = new ProductMapper_1["default"];
var app = express();
app.use(bodyParser.urlencoded({ extented: false }));
app.use(bodyParser.json());
app.get("/", function (req, res) {
    return res.json({ message: "hola" });
});
app.get("/products", function (req, res) {
    var products = productRepository.findAll();
    var results = __spreadArrays(products);
    if (Object.keys(req.query).length > 0) {
        if (req.query.price_min) {
            results = results.filter(function (product) {
                return Number(product.getPrice().replace("$", "")) >= Number(req.query.price_min);
            });
        }
        ;
        if (req.query.price_max) {
            results = results.filter(function (product) {
                return Number(product.getPrice().replace("$", "")) <= req.query.price_min;
            });
        }
    }
    else {
        results = results.slice(0, 10);
    }
    if (req.query.hasOwnProperty("page") && req.query.page > 0) {
        var start = (req.query.page * 10);
        var end = start + 9;
        results = results.slice(start, end);
    }
    return res.status(200).json(results);
});
app.get("/products/:id", function (req, res) {
    if (!Number(req.params.id)) {
        return res.status(400).json({ message: "Bad request. Wrong id" });
    }
    var product = productRepository.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
});
app.post("/products", function (req, res) {
    var newProduct = mapper.mapObjectToEntity(__assign({}, req.body));
    var createdProduct = productRepository.create(newProduct);
    if (!createdProduct) {
        return res.status(500).json({ message: "Product could not be created." });
    }
    return res.status(201).json({ message: "Created", id: createdProduct.getId() });
});
/* app.patch("/products/:id", function(req, res) {
  const updated = productRepository.update(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({ message: "Product not found", id: req.params.id })
  }
  return res.status(201).json({ message: `Product id = ${req.params.id} successfully updated`})
});

app.delete("/products/:id", function(req, res) {
  if (!req.params.id) {
    return res.status(400).json({ message: "Product id is missing."});
  }

  if (!Number(req.params.id)) {
    return res.status(400).json({ message: "Product id is wrong."});
  }

  const removed = productRepository.delete(req.params.id);

  if (!removed) {
    res.status(404).json({ message: "Product not found."})
  }

  res.status(201).json({ message: `Product id= ${req.params.id} was successfully deleted`});
}); */
app.listen(3000);
