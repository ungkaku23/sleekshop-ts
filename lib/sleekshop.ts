import Categories from "./categories";
import Sessions from "./sessions";
import ShopObjects from "./shopobjects";

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
    protected licensePassword: string,
    protected licenceSecretKey: string
  ) {
    if (!restUrl) throw new Error("restUrl is required.");
    if (!licenseUsername) throw new Error("licenseUsername is required.");
    if (!licensePassword) throw new Error("licensePassword is required.");
    if (!licenceSecretKey) throw new Error("licenceSecretKey is required.");
  }

  public categories = new Categories(this);
  public sessions = new Sessions(this);
  public shopobjects = new ShopObjects(this);
}
