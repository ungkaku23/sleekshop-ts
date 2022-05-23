import { 
  jsonFormatter,
  objectToQueryString
} from "./helpers";

const { Curl } = require("node-libcurl");
const curl = new Curl();
const terminate = curl.close.bind(curl);

export default class Coupons {
  
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
   * This request adds coupons to the cart if these are valid. Otherwise an errormessage will be returned. These coupons are only attached to the cart and are dynamically calculated. When the checkout request is performed they will be added to the cart permanently.
   *
   * @param {string} session A valid session code.
   * @param {object} coupons A well formed json-array containing all coupons you want to add.
   * @return {object}
   */
  public addCoupons(
    session: string,
    coupons: object
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "add_coupons",
          session: session,
          coupons: JSON.stringify(coupons)
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
   * This request can be used to create coupons.
   *
   * @param {number} count The number of coupons you want to create.
   * @param {string} name The name of the new coupons.
   * @param {number} amount The amount of the corresponding coupons.
   * @return {object}
   */
  public createCoupons(
    count: number,
    name: string,
    amount: number
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
          request: "create_coupons",
          count: count,
          name: name,
          amount: amount
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
