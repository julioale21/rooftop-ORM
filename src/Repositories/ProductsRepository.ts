import AbstractRepository from "./AbstractRepository";
import Product from "../Entities/ProductEntity";
import { plainToClass } from "class-transformer";


class ProductsRepository extends AbstractRepository {
  protected table: string = "products.json";

  public findAll(): Product[] {
    const data = super.readTable(this.table);
    const products: Product[] = <Product[]>JSON.parse(data);

    return products;
  }

  public findById(id: Number) : Product {
    return new Product;
  }

  public create(product: Product) : Product {
    return new Product;
  }

  public update(id: Number, changes: Object ) : Boolean {
    return true;
  }

  public delete(id: Number) : Boolean {
    return true;
  }
}

export default ProductsRepository;