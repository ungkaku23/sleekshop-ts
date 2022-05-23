import Aggregation from "./aggregation";
import Cart from "./cart";
import Categories from "./categories";
import Coupons from "./coupons";
import Orders from "./orders";
import Payment from "./payment";
import Search from "./search";
import Server from "./server";
import Sessions from "./sessions";
import ShopObjects from "./shopobjects";
import User from "./user";
import Warehouse from "./warehouse";
import WebHooks from "./webhooks";

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
  public shopobjects = new ShopObjects(this);
  public search = new Search(this);
  public cart = new Cart(this);
  public user = new User(this);
  public orders = new Orders(this);
  public payment = new Payment(this);
  public aggregation = new Aggregation(this);
  public coupons = new Coupons(this);
  public server = new Server(this);
  public warehouse = new Warehouse(this);
  public webhooks = new WebHooks(this);
}
