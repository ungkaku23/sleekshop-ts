import SleekShop from '../index';

it("should mock async function - Sessions / get_new_session", async () => {
  expect.assertions(1);
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.sessions.getNewSession();
  expect(data).toMatchObject({ object: "session" });
  console.log('New Session: ', data);
});