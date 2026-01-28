"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const child = (0, child_process_1.spawn)("node", ["child.js"]);
child.stdin.write("Hello from parent process\n");
child.stdin.end();
child.stdout.on("data", (data) => {
    console.log(`Parent got: 
    ${data.toString().trim()}`);
});
