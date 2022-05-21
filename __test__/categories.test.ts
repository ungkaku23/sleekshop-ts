import SleekShop from '../index';

it("should mock async function of class SleekShop", async () => {
  expect.assertions(1);
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr");
  const data = await sleekShop.categories.getCategories(2);
  expect(data).toMatchObject({ object: "shopcategories" });
});