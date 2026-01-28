"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const child = (0, child_process_1.fork)("/Users/Jeya.Suriya/SOLID principles/Multithreading/dist/worker.js");
``;
child.send({ value: 10 });
child.send({ value: 20 });
child.on("message", (response) => {
    console.log("Parent received:", response);
});
