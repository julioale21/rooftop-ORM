import Product from "../Entities/ProductEntity";
import AbstractMapper from "./AbstractMapper";

class ProductMapper extends AbstractMapper {
  public mapObjectToEntity(obj: { 
    id: Number,
    title: String,
    description:String,
    price: String,
    brand: String,
    stock: Number,
    is_visible: Boolean,
  }) : Product {
    let product: Product = new Product;
    product.setId(obj.id);
    product.setTitle(obj.title);
    product.setDescription(obj.description);
    product.setPrice(obj.price);
    product.setBrand(obj.brand);
    product.setStock(obj.stock);
    product.setIs_visible(obj.is_visible);

    return product;
  }
}

export default ProductMapper;