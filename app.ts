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
    console.log("entro")
    results = results.slice(0, 10);
  }

  if (req.query.hasOwnProperty("page") && req.query.page > 0) {
   let start = (req.query.page * 10);
   let end = start + 9;
   results = results.slice(start, end);
  }

  return res.status(200).json(results);
});

app.listen(3000)