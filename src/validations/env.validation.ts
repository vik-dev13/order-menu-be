import { z } from "zod";
import { SECRET_KEY } from "../constants/index";

export const envSchema = z.object({
  PORT: z.string({ required_error: "Port number is required" }),
  NODE_ENV: z.enum(["development", "production", "test"]),
  MONGO_DB_URI: z.string({ required_error: "Db url is required" }),
  SECRET_KEY: z.string({ required_error: "secret key is required" }),
});
export type EnvConfig = z.infer<typeof envSchema>;
