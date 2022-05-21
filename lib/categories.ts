import axios from "axios";
import qs from "qs";

export default class Categories {
  
  protected restUrl: string;
  protected licenseUsername: string;
  protected licensePassword: string;

  constructor(parentObj: any) {
    this.restUrl = parentObj.restUrl;
    this.licenseUsername = parentObj.licenseUsername;
    this.licensePassword = parentObj.licensePassword;
  }

  /**
   * Delivers the categories with the parent defined by id.
   *
   * @param id The id of the parent category.
   */
  public getCategories(id: number) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${this.restUrl}/srv/service/`,
          qs.stringify({
            licence_username: this.licenseUsername,
            licence_password: this.licensePassword,
            request: "get_categories",
            id_parent: id,
            language: "en_EN"
          })
        )
        .then((resp) => {
          resolve(resp.data);
        })
        .catch(reject);
    });
  }
}
