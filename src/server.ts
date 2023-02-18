import express from "express";
import path from "path";
const app = express();

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.status(200);
  res.sendFile(path.resolve("static/pages/index.html"));
});

export default app;
