import Cart from "./cart";
import Categories from "./categories";
import Search from "./search";
import Sessions from "./sessions";
// import ShopObjects from "./shopobjects";
import User from "./user";

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
    protected licenceUsername: string,
    protected licencePassword: string,
    protected licenceSecretKey: string
  ) {
    if (!restUrl) throw new Error("restUrl is required.");
    if (!licenceUsername) throw new Error("licenceUsername is required.");
    if (!licencePassword) throw new Error("licencePassword is required.");
    if (!licenceSecretKey) throw new Error("licenceSecretKey is required.");
  }

  public categories = new Categories(this);
  public sessions = new Sessions(this);
  // public shopobjects = new ShopObjects(this);
  public search = new Search(this);
  public cart = new Cart(this);
  public user = new User(this);
}
