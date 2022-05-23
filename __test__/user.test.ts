import SleekShop from '../index';
import { randomStr } from '../lib/helpers';

// it("should mock async function - User / register_user", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.registerUser(
//     "de_DE", 
//     {
//       "username": randomStr(5),
//       "passwd1": "12312304123",
//       "passwd2": "12312304123",
//       "email": `${randomStr(5)}@gmail.com`
//     }
//   );
//   expect(data).toMatchObject({ status: "SUCCESS" });
// });

// it("should mock async function - User / verify_user", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.verifyUser(1, "asddsaasddas");
//   expect(data).toMatchObject({ object: "verify_user" });
// });

// it("should mock async function - User / login_user", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.loginUser("testuser", "thesecret123", "asddsaasddsa");
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - User / login_user", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.logoutUser("asddsaasddsa");
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - User / set_user_password", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.setUserPassword("asddsaasddsa", "old_password", "123123", "123123");
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - User / reset_user_password init", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.resetUserPasswordInit({
//     "email":"email@domain.com"
//     });
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - User / get_user_order", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.getUserOrders("fsdf");
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - User / get_user_data", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.getUserData("fsdf");
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - User / get_user_by_id", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.getUserById(12);
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - User / set_user_data", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.setUserData(
//     "SESSION",
//     {
//       "department":"test", 
//       "firstname":"my_firstname", 
//       "lastname":"my_lastname"
//     }
//   );
//   expect(data).toMatchObject({ object: "error" });
// });

// it("should mock async function - User / update_user_data", async () => {
//   const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
//   const data = await sleekShop.user.updateUserData(
//     1,
//     {"name":"Test"}
//   );
//   expect(data).toMatchObject({ object: "error" });
// });

it("should mock async function - User / instant_login", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.user.instantLogin("zz", "dd");
  expect(data).toMatchObject({ object: "error" });
});