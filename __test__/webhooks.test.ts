import SleekShop from '../index';
import { randomStr } from '../lib/helpers';

it("should mock async function - WebHooks / update_webhook", async () => {
  const sleekShop = new SleekShop("https://neverland.sleekshop.net", "neverland_72tGoDd5Z3qWEiI8LMGD", "oPhX69kW2izJ2YgdNkjr", "aJ5l6s8EqKpvHcG8yD1i");
  const data = await sleekShop.webhooks.updateWebhook(
    "WEBHOOK_CONTENT_UPDATE",
    "https://www.sleekshop.io",
    "1"
  );
  expect(data).toMatchObject({ object: "update_webhook" });
});