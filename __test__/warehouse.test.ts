import SleekShop from '../index';
import { randomStr } from '../lib/helpers';

// it("should mock async function - Warehouse / create_warehouse_entity", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.warehouse.createWarehouseEntity(
//     "wh_entity",
//     "name_new",
//     1,
//     {"de_DE":{"name":"Test"}},
//     {"element_number":"123321"}
//   );
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Warehouse / update_warehouse_entity", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.warehouse.updateWarehouseEntity(
//     123,
//     "name_new",
//     1,
//     {"de_DE":{"name":"Test"}},
//     {"element_number":"123321"}
//   );
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Warehouse / delete_warehouse_entity", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.warehouse.deleteWarehouseEntity(123);
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - Warehouse / inventory_place", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.warehouse.inventoryPlace(
//     "storage123",
//     "123asd",
//     1,
//     "note"
//   );
//   expect(data).toMatchObject({ object: "error" });
// });

it("should mock async function - Warehouse / inventory_take", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.warehouse.inventoryTake(
    "storage123",
    "123asd",
    1,
    "note"
  );
  expect(data).toMatchObject({ object: "error" });
});