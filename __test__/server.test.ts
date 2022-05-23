import SleekShop from '../index';
import { randomStr } from '../lib/helpers';

it("should mock async function - server / get_status", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.server.getStatus();
  expect(data).toMatchObject({ server_status: "running" });
});