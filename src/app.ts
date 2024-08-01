import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import api from "./api/index.api";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import ExpressMongoSanitize from "express-mongo-sanitize";

import { corsOptions } from "./config/corsOption";

import { notFound, errorHandler } from "./middleware/index.middleware";

config();

const app = express();

app.use(ExpressMongoSanitize());
app.use(cors(corsOptions));

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(helmet.xssFilter());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'trusted-cdn.com'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cookieParser());

app.use("/api/", api);

app.use(notFound);
app.use(errorHandler);

export default app;
