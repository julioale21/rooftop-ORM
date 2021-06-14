import AbstractRepository from "./AbstractRepository";
import Product from "../Entities/ProductEntity";
import { fstat } from "fs";
class ProductsRepository extends AbstractRepository {
  protected table: string = "products.json";

  public findAll(): Product[] {
    const data = super.readTable(this.table);
    const products: Product[] = <Product[]>JSON.parse(data);

    return products;
  }

  public findById(id: Number) : Product {
    const data = super.readTable(this.table);
    const products: Product[] = <Product[]>JSON.parse(data);
    const product = products.find((item) => item.id === Number(id));
    return product;
  }

  public create(product: Product) : Product {
    let data : string = super.readTable(this.table);
    const products : Product[] = <Product[]>JSON.parse(data);
    products.push(product);
    data = JSON.stringify(products);
    super.writeTable(this.table, data);
    return product;
  }

  public update(id: Number, changes: Product ) : Boolean {
    let data : string = super.readTable(this.table);
    const products : Product[] = <Product[]>JSON.parse(data);
    let product: Product = products.find((element) => element.id == Number(id));

    if (!product) {
      return false;
    }

    product = {
      ...product,
      ...changes
    };

    if (changes.price) {
      product.price = "$" + changes.price
    }

    const index = products.findIndex((element) => element.id === Number(id));
    products[index] = product;

    data = JSON.stringify(products);
    super.writeTable(this.table, data);

    return true;
  }

  public delete(id: Number) : Boolean {
    let data : string = super.readTable(this.table);
    const products : Product[] = <Product[]>JSON.parse(data);
    const index = products.findIndex((element) => element.id === Number(id));

    if (index == -1) {
      return false;
    }

    products.splice(index, 1);
    data = JSON.stringify(products);
    super.writeTable(this.table, data);

    return true;
  }
}

export default ProductsRepository;