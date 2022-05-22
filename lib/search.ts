import { 
  jsonFormatter,
  objectToQueryString
} from "./helpers";

const { Curl } = require("node-libcurl");
const curl = new Curl();
const terminate = curl.close.bind(curl);

export default class Search {
  
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
   * Delivers products matching the constraint defined.
   *
   * @param {object} constraint A constraint defining defining which products to deliver.
   * @param {string} language A valid language-code.
   * @param {string} country A valid country-code.
   * @param {object} orderColumns The order column.
   * @param {string} order The order of sorting, valid values are ASC (ascending) or DESC (descending).
   * @param {number} leftLimit The left limit of your selection.
   * @param {number} rightLimit The right limit of your selection.
   * @param {object} neededAttributes This arrays specifies a selection of attributes you want to be listed.
   * @return {object}
   */
  public searchProducts(
    constraint: object,
    language: string,
    country: string,
    orderColumns: object,
    order: string,
    leftLimit: number,
    rightLimit: number,
    neededAttributes: object
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "search_products",
          constraint: JSON.stringify(constraint),
          language: language,
          country: country,
          order_columns: JSON.stringify(orderColumns),
          order: order,
          left_limit: leftLimit,
          right_limit: rightLimit,
          needed_attributes: JSON.stringify(neededAttributes)
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
   * Allows you to search contents matching a determined constraint.
   *
   * @param {object} constraint A constraint defining defining which contents to deliver.
   * @param {string} language A valid language-code.
   * @param {object} orderColumns The order column.
   * @param {string} order The order of sorting, valid values are ASC (ascending) or DESC (descending).
   * @param {number} leftLimit The left limit of your selection.
   * @param {number} rightLimit The right limit of your selection.
   * @param {object} neededAttributes This arrays specifies a selection of attributes you want to be listed.
   * @return {object}
   */
  public searchContents(
    constraint: object,
    language: string,
    orderColumns: object,
    order: string,
    leftLimit: number,
    rightLimit: number,
    neededAttributes: object
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "search_contents",
          constraint: JSON.stringify(constraint),
          language: language,
          order_columns: JSON.stringify(orderColumns),
          order: order,
          left_limit: leftLimit,
          right_limit: rightLimit,
          needed_attributes: JSON.stringify(neededAttributes)
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
   * Delivers the distinct values of a field in a set of products matching the constraint.
   *
   * @param {string} field A field-name.
   * @param {object} constraint A constraint defining defining which contents to deliver.
   * @param {string} language A valid language-code.
   * @return {object}
   */
  public searchDistinctProducts(
    field: string,
    constraint: object,
    language: string
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "search_distinct_products",
          field: field,
          constraint: JSON.stringify(constraint),
          language: language
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
   * Delivers all orders matching the constraint.
   *
   * @param {object} constraint A valid constraint.
   * @param {string} language A valid language-code.
   * @param {object} orderColumns The order column.
   * @param {string} order The order of sorting, valid values are ASC (ascending) or DESC (descending).
   * @param {number} leftLimit The left limit of your selection.
   * @param {number} rightLimit The right limit of your selection.
   * @return {object}
   */
  public searchOrders(
    constraint: object,
    language: string,
    orderColumns: object,
    order: string,
    leftLimit: number,
    rightLimit: number
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "search_orders",
          constraint: JSON.stringify(constraint),
          language: language,
          order_columns: JSON.stringify(orderColumns),
          order: order,
          left_limit: leftLimit,
          right_limit: rightLimit
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
   * Delivers warehouse entities matching the constraint defined.
   *
   * @param {object} constraint A constraint defining defining which products to deliver.
   * @param {string} language A valid language-code.
   * @param {object} orderColumns The order column.
   * @param {string} order The order of sorting, valid values are ASC (ascending) or DESC (descending).
   * @param {number} leftLimit The left limit of your selection.
   * @param {number} rightLimit The right limit of your selection.
   * @param {object} neededAttributes This arrays specifies a selection of attributes you want to be listed.
   * @return {object}
   */
  public searchWarehouseEntities(
    constraint: object,
    language: string,
    orderColumns: object,
    order: string,
    leftLimit: number,
    rightLimit: number,
    neededAttributes: object
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "search_products",
          constraint: JSON.stringify(constraint),
          language: language,
          order_columns: JSON.stringify(orderColumns),
          order: order,
          left_limit: leftLimit,
          right_limit: rightLimit,
          needed_attributes: JSON.stringify(neededAttributes)
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
