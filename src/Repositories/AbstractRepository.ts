import Entity from "../Entities/Entity";
import * as fs from "fs";
import * as path from "path";
import Product from "../Entities/ProductEntity";

abstract class AbstractRepository {
  protected table: string;

  protected readTable(table: string) : string {
    const data = fs.readFileSync(path.resolve(__dirname, `../../${table}`), { encoding: "utf-8"});
    return data;
  };

  protected writeTable(table: string, data: string) : void {
    fs.writeFileSync(path.resolve(__dirname, `../../${table}`), data);
  };

  abstract findAll() : Entity[];

  abstract findById(id: Number) : Entity;

  abstract create(entity: Entity) : Entity;

  abstract update(id: Number, changes: Object) : Boolean;

  abstract delete(id: Number) : Boolean;
}

export default AbstractRepository;