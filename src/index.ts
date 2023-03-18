import * as dotenv from "dotenv";
dotenv.config();

import server from "./server";
import config from "./config";

server.listen(config.port, () => {
  console.log(`Hello on port ${config.port}`);
});
