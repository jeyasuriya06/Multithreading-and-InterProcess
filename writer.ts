// writer.ts
import * as fs from "fs";

const pipePath = "/Users/Jeya.Suriya/SOLID principles/Multithreading/dist/mypipe";

const writeStream = fs.createWriteStream(pipePath);

writeStream.write("Hello from writer process\n");
writeStream.end();

console.log("Writer: message sent");
