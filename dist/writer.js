"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// writer.ts
const fs = require("fs");
const pipePath = "/Users/Jeya.Suriya/SOLID principles/Multithreading/dist/mypipe";
const writeStream = fs.createWriteStream(pipePath);
writeStream.write("Hello from writer process\n");
writeStream.end();
console.log("Writer: message sent");
