import Categories from "./categories";

/**
 * Sleekshop Client.
 *
 * An isomorphic Javascript client for interacting with Postgres.
 * licence_username: "maxundmurat_HcDbZqlx83ZKoyjyU7WT",
 * licence_password: "AJCEU136IYanex2BZRuy",
 */
export default class SleekShop {

  constructor(
    protected restUrl: string,
    protected licenseUsername: string,
    protected licensePassword: string
  ) {
    if (!restUrl) throw new Error("restUrl is required.");
    if (!licenseUsername) throw new Error("licenseUsername is required.");
    if (!licensePassword) throw new Error("licensePassword is required.");
  }

  public categories = new Categories(this);
}
