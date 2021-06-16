import Entity from "../Entities/Entity";
import { writeFileSync } from "fs";
import { resolve } from "path";

abstract class AbstractRepository {
  protected table: string;
  protected data : Array<Entity> = [];

  private saveData() {
    let content = JSON.stringify(this.data);
    writeFileSync(resolve(__dirname, "../../" + this.table), content);
  }

  public findAll() : Entity[] {
    return this.data;
  };

  public findById(id: Number) : Entity {
    return this.data.find(function(obj) {
      return obj.getId() == id
    });
  };

  public create(entity: Entity) : Entity {
    entity.setId(Date.now());
    this.data = [...this.data, entity];
    this.saveData();
    return entity
  };

  public update(entity: Entity) : Boolean {
    if (!entity.getId()) {
      this.create(entity);
    }

    this.data = this.data.map(function(obj) {
      if (obj.getId() == entity.getId()) {
        return entity;
      } 
      return obj;
    });

    return true;
  };

  public delete(id: Number) : Boolean {
    let count = this.data.length;

    this.data = this.data.filter(function(obj) {
      return obj.getId() != id;
    });

    return this.data.length < count;
  };
}

export default AbstractRepository;