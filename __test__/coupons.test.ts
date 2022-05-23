import SleekShop from '../index';
import { randomStr } from '../lib/helpers';

it("should mock async function - coupons / add_coupon", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.coupons.addCoupons(
    "session code",
    ["code1","name1"]
  );
  expect(data).toMatchObject({ object: "error" });
});