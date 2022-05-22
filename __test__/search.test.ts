import SleekShop from '../index';

// it("should mock async function - Search / search_products", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.search.searchProducts({"name":["LIKE","a"]}, "en_US", "US", ["price"], "DESC", 0, 2, ["name", "price"]);
//   expect(data).toMatchObject({ object: "search_products_result" });
// });

// it("should mock async function - Search / search_contents", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.search.searchContents({"name":["LIKE","a"]}, "en_US", ["price"], "DESC", 0, 2, ["name", "price"]);
//   expect(data).toMatchObject({ object: "search_contents_result" });
// });

// it("should mock async function - Search / search_distinct_products", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.search.searchDistinctProducts("name", {"main.name":["LIKE","a"]}, "en_US");
//   expect(data).toMatchObject({ object: "search_distinct_products_result" });
// });

// it("should mock async function - Search / search_orders", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.search.searchOrders({"delivery_firstname":"kaveh"}, "en_US", ["price"], "DESC", 0, 1);
//   expect(data).toMatchObject({ object: "search_orders_result" });
// });

it("should mock async function - Search / search_warehouse_entities", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.search.searchWarehouseEntities({"name":["LIKE","a"]}, "en_US", ["price"], "DESC", 0, 2, ["name","price"]);
  expect(data).toMatchObject({ object: "search_products_result" });
});