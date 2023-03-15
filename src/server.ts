import express from "express";
import router from "./router";
import morgan from "morgan";
import { protect } from "./modules/auth";
import { createNewUser, signIn } from "./handlers/user";
import { close } from "fs";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("Initial route");
  res.status(200);
  res.json({ message: "Hello from API" });
});

app.use("/api", protect, router);

app.post("/user", createNewUser);
app.post("/signin", signIn);

// Error handler
app.use((err, req, res, next) => {
  switch (err.type) {
    case "auth":
      res.status(401).json({ message: "Unauthorized" });
      break;

    case "input":
      res.status(400).json({ message: "Bad request" });
      break;

    default:
      res.status(500).json({ message: "Internal Server Error" });
      break;
  }
});

export default app;
