import AbstractRepository from "./AbstractRepository";
import { readFileSync } from "fs";
import { resolve } from "path";
import ProductMapper from "../DataMappers/ProductMapper";
class ProductsRepository extends AbstractRepository {
  protected table: string = "products.json";

  public constructor() {
    super()
    let content = readFileSync(resolve(__dirname, "../../" + this.table), {encoding: "utf-8"});
    let json = JSON.parse(content);
    let mapper = new ProductMapper
    this.data = json.map(function(item) {
      return mapper.mapObjectToEntity(item)
    })
  }
}

export default ProductsRepository;