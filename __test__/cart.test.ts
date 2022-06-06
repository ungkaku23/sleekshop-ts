import SleekShop from '../index';

it("should mock async function - Cart / add_to_cart", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.cart.addToCart("", 42, "PRODUCT", 0, 1, "price", "name", "short_description", "en_US", "US", []);
  expect(data).toMatchObject({ object: "error" });
});

// it("should mock async function - Cart / sub_from_cart", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.cart.subFromCart("", 42);
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Cart / del_from_cart", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.cart.delFromCart("", 42);
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Cart / clear_cart", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.cart.clearCart("");
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Cart / get_cart", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.cart.getCart("");
//   expect(data).toMatchObject({ object: "error" });
// });