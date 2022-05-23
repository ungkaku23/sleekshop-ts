import SleekShop from '../index';
import { randomStr } from '../lib/helpers';

it("should mock async function - aggregation / aggregate", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.aggregation.aggregate(
    {
      "names":{
        "request":"search_distinct_products",
        "args":{
          "field":"name",
          "constraint":[],
          "language":"de_DE"
        }
      },
      "special_product":{
        "request":"get_product_details",
        "args":{
          "id_product":42,
          "language":"de_DE",
          "country":"DE",
          "needed_attributes":"[]"
        }
      }
    }
  );
  expect(data).toMatchObject({ object: "error" });
});