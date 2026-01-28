
import * as fs from "fs";

const pipePath = "/Users/Jeya.Suriya/SOLID principles/Multithreading/dist/mypipe";

const readStream = fs.createReadStream(pipePath);

readStream.on("data", (data: Buffer) => {
  console.log(`Reader received: ${data.toString().trim()}`);
});
