import { config } from "dotenv";
config();

const SECRET_KEY = process.env.SECRET_KEY;
// const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
// const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
// const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;

// const TWILIO_PHONE_NUMBER = "+19548006865";

export {
  SECRET_KEY,
  // TWILIO_ACCOUNT_SID,
  // TWILIO_AUTH_TOKEN,
  // TWILIO_SERVICE_SID,
  // TWILIO_PHONE_NUMBER,
};
