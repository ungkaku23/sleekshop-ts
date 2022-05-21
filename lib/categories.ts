import axios from "axios";
import qs from "qs";
import { jsonFormatter } from "./helpers";

export default class Categories {
  
  protected restUrl: string;
  protected licenseUsername: string;
  protected licensePassword: string;
  protected licenceSecretKey: string;

  constructor(parentObj: any) {
    this.restUrl = parentObj.restUrl;
    this.licenseUsername = parentObj.licenseUsername;
    this.licensePassword = parentObj.licensePassword;
    this.licenceSecretKey = parentObj.licenceSecretKey;
  }

  /**
   * Delivers the categories with the parent defined by id.
   *
   * @param {number} id The id of the parent category.
   * @param {string} language A valid language-code.
   * @return {object}
   */
  public getCategories(id: number, language: string) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${this.restUrl}/srv/service/`,
          qs.stringify({
            licence_username: this.licenseUsername,
            licence_password: this.licensePassword,
            request: "get_categories",
            id_parent: id,
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
   * Delivers products contained in a category defined by its id.
   *
   * @param {number} idCategory The id of the category.
   * @param {string} language A valid language-code.
   * @param {string} country A valid country-code.
   * @param {string} orderColumn The order column.
   * @param {string} order The order of sorting, valid values are ASC (ascending) or DESC (descending).
   * @param {number} leftLimit The left limit of your selection.
   * @param {number} rightLimit The right limit of your selection.
   * @param {object} neededAttributes This arrays specifies a selection of attributes you want to be listed.
   * @return {object}
   */
  public getProductsInCategory(
    idCategory: number,
    language: string,
    country: string,
    orderColumn: string,
    order: string,
    leftLimit: number,
    rightLimit: number,
    neededAttributes: object) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${this.restUrl}/srv/service/`,
            qs.stringify({
              licence_username: this.licenseUsername,
              licence_password: this.licensePassword,
              request: "get_products_in_category",
              id_category: idCategory,
              language: language,
              country: country,
              order_column: orderColumn,
              order: order,
              left_limit: leftLimit,
              right_limit: rightLimit,
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
   * Delivers contents contained in a category defined by its id.
   *
   * @param {number} idCategory The id of the category.
   * @param {string} language A valid language-code.
   * @param {string} orderColumn The order column.
   * @param {string} order The order of sorting, valid values are ASC (ascending) or DESC (descending).
   * @param {number} leftLimit The left limit of your selection.
   * @param {number} rightLimit The right limit of your selection.
   * @param {object} neededAttributes This arrays specifies a selection of attributes you want to be listed.
   * @return {object}
   */
  public getContentsInCategory(
    idCategory: number,
    language: string,
    orderColumn: string,
    order: string,
    leftLimit: number,
    rightLimit: number,
    neededAttributes: object) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${this.restUrl}/srv/service/`,
            qs.stringify({
                licence_username: this.licenseUsername,
                licence_password: this.licensePassword,
                request: "get_products_in_category",
                id_category: idCategory,
                language: language,
                order_column: orderColumn,
                order: order,
                left_limit: leftLimit,
                right_limit: rightLimit,
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
   * Delivers products and contents contained in a category defined by its id.
   *
   * @param {number} idCategory The id of the category.
   * @param {string} language A valid language-code.
   * @param {string} country A valid country-code.
   * @param {string} orderColumn The order column.
   * @param {string} order The order of sorting, valid values are ASC (ascending) or DESC (descending).
   * @param {number} leftLimit The left limit of your selection.
   * @param {number} rightLimit The right limit of your selection.
   * @param {object} neededAttributes This arrays specifies a selection of attributes you want to be listed.
   * @return {object}
   */
  public getShopObjectsInCategory(
    idCategory: number,
    language: string,
    country: string,
    orderColumn: string,
    order: string,
    leftLimit: number,
    rightLimit: number,
    neededAttributes: object) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${this.restUrl}/srv/service/`,
            qs.stringify({
                licence_username: this.licenseUsername,
                licence_password: this.licensePassword,
                request: "get_shopobjects_in_category",
                id_category: idCategory,
                language: language,
                country: country,
                order_column: orderColumn,
                order: order,
                left_limit: leftLimit,
                right_limit: rightLimit,
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
   * Delivers products and contents recursively where the id_category determines the root where the iteration begins.
   *
   * @param {number} idCategory The id of the category.
   * @param {string} language A valid language-code.
   * @param {string} country A valid country-code.
   * @param {string} orderColumn The order column.
   * @param {string} order The order of sorting, valid values are ASC (ascending) or DESC (descending).
   * @param {number} leftLimit The left limit of your selection.
   * @param {number} rightLimit The right limit of your selection.
   * @param {object} neededAttributes This arrays specifies a selection of attributes you want to be listed.
   * @return {object}
   */
  public dumpCategory(
    idCategory: number,
    language: string,
    country: string,
    orderColumn: string,
    order: string,
    leftLimit: number,
    rightLimit: number,
    neededAttributes: object) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${this.restUrl}/srv/service/`,
            qs.stringify({
                licence_username: this.licenseUsername,
                licence_password: this.licensePassword,
                request: "dump_category",
                id_category: idCategory,
                language: language,
                country: country,
                order_column: orderColumn,
                order: order,
                left_limit: leftLimit,
                right_limit: rightLimit,
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
   * Delivers products contained in a category defined by its permalink.
   *
   * @param {string} permalink A valid permalink of the category.
   * @param {string} country A valid country-code.
   * @param {string} orderColumn The order column.
   * @param {string} order The order of sorting, valid values are ASC (ascending) or DESC (descending).
   * @param {number} leftLimit The left limit of your selection.
   * @param {number} rightLimit The right limit of your selection.
   * @param {object} neededAttributes This arrays specifies a selection of attributes you want to be listed.
   * @return {object}
   */
  public seoGetProductsInCategory(
    permalink: string,
    country: string,
    orderColumn: string,
    order: string,
    leftLimit: number,
    rightLimit: number,
    neededAttributes: object) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `${this.restUrl}/srv/service/`,
            qs.stringify({
                licence_username: this.licenseUsername,
                licence_password: this.licensePassword,
                request: "seo_get_products_in_category",
                permalink: permalink,
                country: country,
                order_column: orderColumn,
                order: order,
                left_limit: leftLimit,
                right_limit: rightLimit,
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
   * This request can be used to delete categories. 
   * The request will be executed as long as an error occurs. 
   * In this case the error will be returned.
   *
   * @param {number} idCategory The id of the category.
   * @return {object}
   */
  public deleteCategory(idCategory: number) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${this.restUrl}/srv/service/`,
          qs.stringify({
            licence_username: this.licenseUsername,
            licence_password: this.licensePassword,
            licence_secret_key: this.licenceSecretKey,
            request: "delete_category",
            id_category: idCategory
          })
        )
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((err) => {
          reject(err)
        });
    });
  }
}
