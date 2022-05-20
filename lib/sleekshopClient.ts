import { stripTrailingSlash } from "./helpers";

import "./categoryRequests";
import { CategoryRequests } from "./categoryRequests";
import axios from "axios";

/**
 * Sleekshop Client.
 *
 * An isomorphic Javascript client for interacting with Postgres.
 */
export default class SleekshopClient {
  protected restUrl: string;

  constructor(
    protected sleekshopUrl: string,
    protected licenseUsername: string,
    protected licensePassword: string
  ) {
    if (!sleekshopUrl) throw new Error("sleekshopUrl is required.");
    if (!licenseUsername) throw new Error("licenseUsername is required.");
    if (!licensePassword) throw new Error("licensePassword is required.");

    const _sleekshopUrl = stripTrailingSlash(sleekshopUrl);

    this.restUrl = `${_sleekshopUrl}/srv/service/`;
  }

  public category = new CategoryRequests(this);

  public getPokemonById(id: number) {
    const url = this.restUrl;
    return new Promise((resolve, reject) => {
      axios
        .get(`${url}/pokemon/${id}`)
        .then((resp) => {
          resolve(resp.data);
        })
        .catch(reject);
    });
  }

  /**
   * Perform a table operation.
   *
   * @param table The table name to operate on.
   */
  public testAsdf(table: string) {
    console.log(this.restUrl, table);
    return this.restUrl;
  }
}
