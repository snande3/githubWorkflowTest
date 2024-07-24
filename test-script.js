const fs = require("fs");
const path = require("path");

//  Get application settings and secrets from config.json file
const configPath = path.join(__dirname, "./config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));


console.log('COnfigs:', config);

console.log('Hello World');

console.log('Hello World');

console.log('Hello World');ß