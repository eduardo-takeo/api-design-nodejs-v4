import * as dotenv from "dotenv";
dotenv.config();

import server from "./server";
const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Hello on port ${PORT}`);
});
