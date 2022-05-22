import SleekShop from '../index';
import { randomStr } from '../lib/helpers';

it("should mock async function - User / register_user", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.user.registerUser(
    "de_DE", 
    {
      "username": randomStr(5),
      "passwd1": "12312304123",
      "passwd2": "12312304123",
      "email": `${randomStr(5)}@gmail.com`
    }
  );
  expect(data).toMatchObject({ status: "SUCCESS" });
});