import Entity from "./Entity";

class Product extends Entity {
  title: String;
  description: String;
  price: String;
  brand: String;
  stock: Number;
  is_visible: Boolean;
}

export default Product;