import express from "express";
const app = express();
const port = 3000;
import web from "./router/web.js";

app.use("/", web);

app.listen(port, () => {
  console.log(`Your server is running at the port http://localhost:${port}`);
});
