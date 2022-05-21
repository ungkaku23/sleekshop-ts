import SleekShop from '../index';

// it("should mock async function - ShopObjects / get_product_details", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.shopobjects.getProductDetails(42, "en_US", "US", ["name","price"]);
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - ShopObjects / get_content_details", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.shopobjects.getContentDetails(5, "en_US");
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - ShopObjects / seo_get_product_details", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.shopobjects.seoGetProductDetails("dunkelblau-schneehut-warm", "US", ["name","price"]);
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - ShopObjects / seo_get_content_details", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.shopobjects.seoGetContentDetails("impressum");
//   expect(data).toMatchObject({ object: "error" });
// });

it("should mock async function - ShopObjects / create_product", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.shopobjects.createProduct("your-class", "name_new2", 1, {"de_DE":{"name":"Test"}}, {"element_number":"12asddsa3321"}, {"de_DE":{"permalink":"test546576"}}, {"quantity":2,"active":1});
  expect(data).toMatchObject({ object: "error" });
});