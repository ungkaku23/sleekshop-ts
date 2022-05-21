import axios from "axios";
import qs from "qs";
import { jsonFormatter } from "./helpers";

export default class ShopObjects {
  
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
   * Delivers the product - details for the product defined by its id.
   *
   * @param {number} idProduct The id of the product.
   * @param {string} language A valid language-code.
   * @param {string} country A valid country-code.
   * @param {object} neededAttributes This arrays specifies a selection of attributes you want to be listed.
   * @return {object}
   */
  public getProductDetails(
    idProduct: number,
    language: string,
    country: string,
    neededAttributes: object) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${this.restUrl}/srv/service/`,
            qs.stringify({
              licence_username: this.licenceUsername,
              licence_password: this.licencePassword,
              request: "get_product_details",
              id_product: idProduct,
              language: language,
              country: country,
              needed_attributes: JSON.stringify(neededAttributes)
            })
          )
          .then((resp) => {
            resolve(jsonFormatter(resp.data));
          })
          .catch((err) => {
            reject(jsonFormatter(err));
          });
      });
  }

  /**
   * Delivers the content - details for the product defined by its id.
   *
   * @param {number} idContent The id of the product.
   * @param {string} language A valid language-code.
   * @return {object}
   */
  public getContentDetails(
    idContent: number,
    language: string) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${this.restUrl}/srv/service/`,
            qs.stringify({
              licence_username: this.licenceUsername,
              licence_password: this.licencePassword,
              request: "get_content_details",
              id_content: idContent,
              language: language
            })
          )
          .then((resp) => {
            resolve(jsonFormatter(resp.data));
          })
          .catch((err) => {
            reject(jsonFormatter(err));
          });
      });
  }

  /**
   * Delivers the product - details for the product defined by its permalink.
   *
   * @param {string} permalink The permalink of the product.
   * @param {string} country A valid country-code.
   * @param {object} neededAttributes A valid country-code.
   * @return {object}
   */
  public seoGetProductDetails(
    permalink: string,
    country: string,
    neededAttributes: object) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${this.restUrl}/srv/service/`,
            qs.stringify({
              licence_username: this.licenceUsername,
              licence_password: this.licencePassword,
              request: "seo_get_product_details",
              permalink: permalink,
              country: country,
              needed_attributes: JSON.stringify(neededAttributes)
            })
          )
          .then((resp) => {
            resolve(jsonFormatter(resp.data));
          })
          .catch((err) => {
            reject(jsonFormatter(err));
          });
      });
  }

  /**
   * Delivers the content - details for the content defined by its permalink.
   *
   * @param {string} permalink The permalink of the product.
   * @return {object}
   */
  public seoGetContentDetails(
    permalink: string) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${this.restUrl}/srv/service/`,
            qs.stringify({
              licence_username: this.licenceUsername,
              licence_password: this.licencePassword,
              request: "seo_get_content_details",
              permalink: permalink
            })
          )
          .then((resp) => {
            resolve(jsonFormatter(resp.data));
          })
          .catch((err) => {
            reject(jsonFormatter(err));
          });
      });
  }

  /**
   * This request can be used to create products. The request will be executed as long as an error occurs. 
   * In this case the error will be returned.
   *
   * @param {string} classOfProduct The class of the product you want to create.
   * @param {string} name The name of the new product.
   * @param {number} shopActive Indicating wether the product is shop_active or not. Use 1 for active an 0 for inactive.
   * @param {object} attributes A json - array with all attributes you want to set the value. 
   * @param {object} seo A json - array with all seo - attributes you want to set.
   * @param {object} metadata A json - array with all metadata you want to set.
   * @param {object} availability A json - array with all availability - data.
   * @param {object} categories A json - array containing all categories you want the product to be in.
   * @return {object}
   */
  public createProduct(
    classOfProduct: string,
    name: string,
    shopActive: number,
    attributes: object,
    seo: object,
    metadata: object,
    availability: object) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${this.restUrl}/srv/service/`,
            qs.stringify({
              licence_username: this.licenceUsername,
              licence_password: this.licencePassword,
              licence_secret_key: this.licenceSecretKey,
              request: "create_product",
              "class": classOfProduct,
              name: name,
              shop_active: shopActive,
              attributes: attributes,
              metadata: metadata,
              seo: seo,
              availability: availability,
            })
          )
          .then((resp) => {
            resolve(jsonFormatter(resp.data));
          })
          .catch((err) => {
            reject(jsonFormatter(err));
          });
      });
  }
}
