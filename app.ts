import * as express from "express";
import * as bodyParser from "body-parser";
import ProductRepository from "./src/Repositories/ProductsRepository";
import Product from "./src/Entities/ProductEntity";

const productRepository = new ProductRepository;

const app = express();

app.use(bodyParser.urlencoded({ extented: false}));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  return res.json({ message: "hola"})
});

app.get("/products", function(req, res) {
  const products: Product[] = productRepository.findAll();

  let results: Product[] = [...products];

  if (Object.keys(req.query).length > 0) {
    if (req.query.price_min) {
      results = results.filter(function(product: Product) {
        return Number(product.price.replace("$", "")) >= Number(req.query.price_min)
      });
    };

    if (req.query.price_max) {
      results = results.filter(function(product) {
        return Number(product.price.replace("$", "")) <= req.query.price_min
      });
    }
  } else {
    results = results.slice(0, 10);
  }

  if (req.query.hasOwnProperty("page") && req.query.page > 0) {
   let start = (req.query.page * 10);
   let end = start + 9;
   results = results.slice(start, end);
  }

  return res.status(200).json(results);
});

app.get("/products/:id", function(req, res) {
  if (!Number(req.params.id)) {
    return res.status(400).json({ message: "Bad request. Wrong id"});
  }

  const product : Product = productRepository.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found"});
  }

  return res.status(200).json(product);
});

app.post("/products", function(req, res) {

  let newProduct = {
    id: Date.now(),
    description: "",
    is_visible: false,
    ...req.body
  }

  const createdProduct = productRepository.create(newProduct);

  if (!createdProduct) {
    return res.status(500).json({ message: "Product could not be created."})
  }
  return res.status(201).json({ message: "Created", id: createdProduct.id });
});

app.patch("/products/:id", function(req, res) {
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
});


app.listen(3000)