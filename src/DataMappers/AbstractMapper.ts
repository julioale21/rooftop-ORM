import Entity from "../Entities/Entity";

abstract class AbstractMapper {
  abstract mapObjectToEntity(obj: object) : Entity;
}

export default AbstractMapper;