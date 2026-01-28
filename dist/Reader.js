"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const pipePath = "/Users/Jeya.Suriya/SOLID principles/Multithreading/dist/mypipe";
const readStream = fs.createReadStream(pipePath);
readStream.on("data", (data) => {
    console.log(`Reader received: ${data.toString().trim()}`);
});
