import axios from "axios";
import qs from "qs";

export default class Sessions {
  
  protected restUrl: string;
  protected licenseUsername: string;
  protected licensePassword: string;

  constructor(parentObj: any) {
    this.restUrl = parentObj.restUrl;
    this.licenseUsername = parentObj.licenseUsername;
    this.licensePassword = parentObj.licensePassword;
  }

  /**
   * Delivers a new session.
   *
   * @param N/A
   * @return {object}
   */
  public getNewSession() {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${this.restUrl}/srv/service/`,
          qs.stringify({
            licence_username: this.licenseUsername,
            licence_password: this.licensePassword,
            request: "get_new_session"
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
