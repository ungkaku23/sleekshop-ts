import {
  jsonFormatter,
  objectToQueryString
} from "./helpers";

const { Curl } = require("node-libcurl");

export default class Cart {

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
   * Adds an element to the cart determined by a session.
   *
   * @param {string} session A valid session code.
   * @param {number} idShopObject The id of the object you want to add to the cart. The value can also be 0. This is interesting for FREE_ELEMENTS.
   * @param {string} elementType A valid element_type. Valid values are: PRODUCT, PRODUCT_GR, FREE_ELEMENT, FREE_ELEMENT_GR.
   * @param {number} idParentElement If needed you can add a parent element. This value can also be 0 when no parent is needed.
   * @param {number} quantity The quantity you want to be added.
   * @param {string} priceField A field determining the field the the price is stored. For free elements you can also set the price directly.
   * @param {string} nameField A field determining where the name is stored.
   * @param {string} descriptionField A field where the description is stored.
   * @param {string} language A valid language - code.
   * @param {string} country A valid country - code.
   * @param {object} attributes Additional attributes you want to be stored.
   * @return {object}
   */
  public addToCart(
    session: string,
    idShopObject: number,
    elementType: string,
    idParentElement: number,
    quantity: number,
    priceField: string,
    nameField: string,
    descriptionField: string,
    language: string,
    country: string,
    attributes: object
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "add_to_cart",
          session: session,
          id_shopobject: idShopObject,
          element_type: elementType,
          id_parent_element: idParentElement,
          quantity: quantity,
          price_field: priceField,
          name_field: nameField,
          description_field: descriptionField,
          language: language,
          country: country,
          attributes: JSON.stringify(attributes)
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
   * Decreases an element from the cart by one.
   *
   * @param {string} session A valid session code.
   * @param {number} idElement A valid element_id. This is the id which is set by the cart, not the id_product.
   * @return {object}
   */
  public subFromCart(
    session: string,
    idElement: number
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "sub_from_cart",
          session: session,
          id_element: idElement
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
   * Deletes an element from the cart.
   *
   * @param {string} session A valid session code.
   * @param {number} idElement A valid element_id. This is the id which is set by the cart, not the id_product.
   * @return {object}
   */
  public delFromCart(
    session: string,
    idElement: number
  ) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "del_from_cart",
          session: session,
          id_element: idElement
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
   * Deletes the complete cart and delivers an empty one.
   *
   * @param {string} session A valid session code.
   * @return {object}
   */
  public clearCart(session: string) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "clear_cart",
          session: session
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
   * Delivers the cart and its contents from a given session.
   *
   * @param {string} session A valid session code.
   * @return {object}
   */
  public getCart(session: string) {
    const curl = new Curl();
    const terminate = curl.close.bind(curl);

    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "get_cart",
          session: session
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
