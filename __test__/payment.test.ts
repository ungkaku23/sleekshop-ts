import SleekShop from '../index';
import { randomStr } from '../lib/helpers';

// it("should mock async function - payment / get_payment_methods", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.payment.getPaymentMethods();
//   expect(data).toMatchObject({ object: "payment_methods" });
// });

// it("should mock async function - payment / do_payment", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.payment.doPayment(1, []);
//   expect(data).toMatchObject({ object: "error" });
// });

it("should mock async function - payment / add_delivery_costs", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.payment.addDeliveryCosts("session", [["Delivery",4.90,0.19],["Delivery2",5.90,0.19]]);
  expect(data).toMatchObject({ object: "error" });
});