import { formatPhone, telHref, smsHref } from "./phone";

/** The ONE place the number lives. Digits only — display and hrefs derive from it. */
const PHONE_DIGITS = "9737072135";

export const SMS_BODY =
  "Hi Freshi! Pickup order please: ";

export const site = {
  name: "Freshi Healthy Fusion",
  phoneDigits: PHONE_DIGITS,
  phone: formatPhone(PHONE_DIGITS),
  phoneHref: telHref(PHONE_DIGITS),
  smsBody: SMS_BODY,
  smsHref: smsHref(PHONE_DIGITS, SMS_BODY),
};
