/* eslint-disable no-await-in-loop */

/* eslint-disable no-extra-semi */
import { Deserializer as JSONAPIDeserializer } from "jsonapi-serializer";

/**
 * JSON API Decerializer
 */
class Deserializer extends JSONAPIDeserializer {
  private async processOneLevel(object: any) {
    let deserialized =
      typeof object?.data === "object"
        ? await this.deserialize(object)
        : object;

    // cast type to ARRAY to always work with the same type
    let wasArray = true;

    if (!Array.isArray(deserialized)) {
      deserialized = [deserialized];
      wasArray = false;
    }

    // deserialize objects by keys while fields have data to deserialize
    for (let i = 0; i < deserialized.length; i += 1) {
      const deserializedField = deserialized[i];
      let [key, notWrapped] = this.getSerializableKey(deserialized[i]);

      while (key) {
        if (notWrapped) {
          deserializedField[key] = await this.processOneLevel({
            data: deserializedField[key],
          });
        } else {
          deserializedField[key] = await this.processOneLevel(
            deserializedField[key]
          );
        }

        [key, notWrapped] = this.getSerializableKey(deserialized[i]);
      }
    }

    // cast type back to its origin
    if (deserialized?.length === 1 && !wasArray) [deserialized] = deserialized;

    return deserialized;
  }

  private getSerializableKey: (obj: any) => [string | undefined, boolean] = (
    object
  ) => {
    if (typeof object !== "object") return [undefined, false];

    let serializableKey: [string | undefined, boolean] = [undefined, false];

    Object.keys(object).some((key) => {
      const innerObject = object[key];

      const isInnerObjArray = Array.isArray(innerObject);

      if (!innerObject || typeof innerObject !== "object" || !innerObject.data)
        return false;

      const hasData = typeof innerObject.data === "object";
      // field is not wrapped with data object
      const notWrapped =
        (!isInnerObjArray && innerObject.attributes) ||
        (isInnerObjArray && innerObject.some((o) => o?.attributes));

      if (hasData) serializableKey = [key, false];
      if (notWrapped) serializableKey = [key, true];
      // check if deserialized data lay on deeper level
      if (
        !isInnerObjArray &&
        Object.keys(innerObject).some(
          (key) => innerObject[key].data || innerObject[key].attributes
        )
      ) {
        serializableKey = [key, false];
        return true;
      }

      return notWrapped || hasData;
    });

    return serializableKey;
  };

  async deepDeserialize(object: any) {
    try {
      const result = await this.processOneLevel(object);
      return result;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return null;
    }
  }
}

export default new Deserializer({ keyForAttribute: "snake_case" });
