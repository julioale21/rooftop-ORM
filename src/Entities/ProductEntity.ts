import Entity from "./Entity";

class Product extends Entity {
  private title: String = "";
  private description: String = "";
  private price: String = "";
  private brand: String = "";
  private stock: Number = 0;
  private is_visible: Boolean = false;

  public getTitle(): String {
      return this.title;
  }

  public setTitle(title: String): void {
      this.title = title;
  }

  public getDescription(): String {
      return this.description;
  }

  public setDescription(description: String): void {
      this.description = description;
  }

  public getPrice(): String {
      return this.price;
  }

  public setPrice(price: String): void {
      this.price = price;
  }

  public getBrand(): String {
      return this.brand;
  }

  public setBrand(brand: String): void {
      this.brand = brand;
  }

  public getStock(): Number {
      return this.stock;
  }

  public setStock(stock: Number): void {
      this.stock = stock;
  }

  public isIs_visible(): Boolean {
      return this.is_visible;
  }

  public setIs_visible(is_visible: Boolean): void {
      this.is_visible = is_visible;
  }
}

export default Product;