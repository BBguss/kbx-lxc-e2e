const fs = require("fs");
fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/build.json", JSON.stringify({ builtAt: new Date().toISOString() }));
console.log("build ok");
