import SleekShop from '../index';
import { randomStr } from '../lib/helpers';

// it("should mock async function - Orders / set_order_details", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.orders.setOrderDetails(
//     "", 1, 2, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
//     [{"lang":"en_EN","name":"more-infos","value":"here is something important"}]
//   );
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Orders / update_order_details", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.orders.updateOrderDetails(
//     1, 1, 2, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
//     [{"lang":"en_EN","name":"more-infos","value":"here is something important"}]
//   );
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Orders / get_order_details", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.orders.getOrderDetails("");
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Orders / get_order_by_id", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.orders.getOrderById(1);
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Orders / checkout", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.orders.checkout("session");
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Orders / get_invoice", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.orders.getInvoice(1, {});
//   expect(data).toMatchObject({ object: "error" });
// });

it("should mock async function - Orders / get_order_confirmation", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.orders.getOrderConfirmation(1, {"invoice_link":"www.your-link"});
  expect(data).toMatchObject({ object: "error" });
});