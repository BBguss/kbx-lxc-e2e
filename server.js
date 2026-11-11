const express = require("express");
const fs = require("fs");
const app = express();
const VERSION = "v1";
app.get("/", (req, res) => res.json({ app: "kbx-lxc-e2e", version: VERSION, build: fs.existsSync("dist/build.json") }));
app.get("/health", (req, res) => res.send("ok"));
const port = Number(process.env.PORT) || 3000;
app.listen(port, "0.0.0.0", () => console.log(`listening on ${port}`));
