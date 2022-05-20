import axios from "axios";
import qs from "qs";

export class CategoryRequests {
  protected restUrl: string;

  constructor(variables: any) {
    this.restUrl = variables.restUrl;
  }

  // /**
  //  * Perform a table operation.
  //  *
  //  * @param table The table name to operate on.
  //  */
  // test(table: string) {
  //   console.log(this.restUrl, table);
  //   return this.restUrl;
  // }

  /**
   * Perform a table operation.
   *
   * @param id The table name to operate on.
   */
  public test2(id: number) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `https://demo.sleekshop.net/srv/service/`,
          qs.stringify({
            licence_username: "maxundmurat_HcDbZqlx83ZKoyjyU7WT",
            licence_password: "AJCEU136IYanex2BZRuy",
            request: "get_categories",
            id_parent: id,
            language: "de_DE",
          })
        )
        .then((resp) => {
          resolve(resp.data);
        })
        .catch(reject);
    });
  }
}
