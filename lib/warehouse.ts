import { 
  jsonFormatter,
  objectToQueryString
} from "./helpers";

const { Curl } = require("node-libcurl");
const curl = new Curl();
const terminate = curl.close.bind(curl);

export default class Warehouse {
  
  protected restUrl: string;
  protected licenceUsername: string;
  protected licencePassword: string;
  protected licenceSecretKey: string;

  constructor(parentObj: any) {
    this.restUrl = parentObj.restUrl;
    this.licenceUsername = parentObj.licenceUsername;
    this.licencePassword = parentObj.licencePassword;
    this.licenceSecretKey = parentObj.licenceSecretKey;
  }

  /**
   * This request can be used to create warehouse entities. The request will be executed as long as an error occurs. In this case the error will be returned.
   *
   * @param {string} classOfNewProduct The class of the new product.
   * @param {string} name The name of the new product.
   * @param {number} idManufacturer The id of the corresponding manufacturer.
   * @param {object} attributes A json - array with all attributes you want to set the value. 
   * @param {object} metadata A json - array with all metadata you want to set.
   * @return {object}
   */
  public createWarehouseEntity(
    classOfNewProduct: string,
    name: string,
    idManufacturer: number,
    attributes: object,
    metadata: object
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          licence_secret_key: this.licenceSecretKey,
          request: "create_warehouse_entity",
          "class": classOfNewProduct,
          name: name,
          id_manufacturer: idManufacturer,
          attributes: JSON.stringify(attributes),
          metadata: JSON.stringify(metadata)
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });
      
      curl.perform();
    });
  }

  /**
   * This request can be used to update warehouse entities. The request will be executed as long as an error occurs. In this case the error will be returned.
   *
   * @param {number} idWarehouseEntity The id of the warehouse - entity you want to update.
   * @param {string} name The name of the new product.
   * @param {number} idManufacturer The id of the corresponding manufacturer.
   * @param {object} attributes A json - array with all attributes you want to set the value. 
   * @param {object} metadata A json - array with all metadata you want to set.
   * @return {object}
   */
  public updateWarehouseEntity(
    idWarehouseEntity: number,
    name: string,
    idManufacturer: number,
    attributes: object,
    metadata: object
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          licence_secret_key: this.licenceSecretKey,
          request: "update_warehouse_entity",
          id_warehouse_entity: idWarehouseEntity,
          name: name,
          id_manufacturer: idManufacturer,
          attributes: JSON.stringify(attributes),
          metadata: JSON.stringify(metadata)
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });
      
      curl.perform();
    });
  }

  /**
   * This request can be used to delete warehouse entities. The request will be executed as long as an error occurs. In this case the error will be returned.
   *
   * @param {number} idWarehouseEntity The id of the warehouse - entity you want to update.
   * @return {object}
   */
  public deleteWarehouseEntity(idWarehouseEntity: number) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          licence_secret_key: this.licenceSecretKey,
          request: "delete_warehouse_entity",
          id_warehouse_entity: idWarehouseEntity
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });
      
      curl.perform();
    });
  }

  /**
   * This request can be used to place warehouse entities. The request will be executed as long as an error occurs. In this case the error will be returned.
   *
   * @param {string} storage The storage name you want to place the entity.
   * @param {string} elementNumber The element number of the entity you want to place.
   * @param {number} quantity How many items you want to place?
   * @param {string} note A note you want to add to your checkin.
   * @return {object}
   */
  public inventoryPlace(
    storage: string,
    elementNumber: string,
    quantity: number,
    note: string
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          licence_secret_key: this.licenceSecretKey,
          request: "inventory_place",
          storage: storage,
          element_number: elementNumber,
          quantity: quantity,
          note: note
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });
      
      curl.perform();
    });
  }

  /**
   * This request can be used to take warehouse entities. The request will be executed as long as an error occurs. In this case the error will be returned.
   *
   * @param {string} storage The storage name you want to place the entity.
   * @param {string} elementNumber The element number of the entity you want to place.
   * @param {number} quantity How many items you want to place?
   * @param {string} note A note you want to add to your checkin.
   * @return {object}
   */
  public inventoryTake(
    storage: string,
    elementNumber: string,
    quantity: number,
    note: string
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          licence_secret_key: this.licenceSecretKey,
          request: "inventory_take",
          storage: storage,
          element_number: elementNumber,
          quantity: quantity,
          note: note
        })
      );

      curl.on("end", (statusCode: any, data: any, headers: any) => {
        resolve(jsonFormatter(data));
      });

      curl.on("error", (statusCode: any, data: any, headers: any) => {
        terminate();
        reject(jsonFormatter(data));
      });
      
      curl.perform();
    });
  }
}
