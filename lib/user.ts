import { 
  jsonFormatter,
  objectToQueryString
} from "./helpers";

const { Curl } = require("node-libcurl");
const curl = new Curl();
const terminate = curl.close.bind(curl);

export default class User {
  
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
   * Is used to create user - accounts via API.
   *
   * @param {string} language The language of the user.
   * @param {object} args The data of the user you want to register.
   * @return {object}
   */
  public registerUser(
    language: string,
    args: object
  ) {
    return new Promise((resolve, reject) => {
      curl.setOpt(Curl.option.URL, `${this.restUrl}/srv/service/`);
      curl.setOpt(Curl.option.POST, true);
      curl.setOpt(
        Curl.option.POSTFIELDS,
        objectToQueryString({
          licence_username: this.licenceUsername,
          licence_password: this.licencePassword,
          request: "register_user",
          language: language,
          args: JSON.stringify(args)
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
