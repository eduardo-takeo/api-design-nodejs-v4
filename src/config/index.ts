import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage = process.env.STAGE || "local";

let envConfig;

if (stage === "prod") {
  envConfig = require("./prod").default;
} else if (stage === "testing") {
  envConfig = require("./testing").default;
} else {
  envConfig = require("./local").require;
}

export default merge(
  {
    stage,
    env: process.env.NODE_ENV,
    port: 5000,
    secrets: {
      jwt: process.env.JWT_SECRET,
      dbUrl: process.env.DATABASE_URL,
    },
  },
  envConfig
);
