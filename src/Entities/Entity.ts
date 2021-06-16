abstract class Entity {
  private id: Number;

  public getId(): Number {
      return this.id;
  }

  public setId(id: Number): void {
      this.id = id;
  }

}

export default Entity;