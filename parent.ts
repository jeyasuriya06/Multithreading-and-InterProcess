import { spawn } from "child_process";

const child = spawn("node", ["child.js"]);

child.stdin.write("Hello from parent process\n");
child.stdin.end();

child.stdout.on("data", (data: Buffer) => {
  console.log(`Parent got: 
    ${data.toString().trim()}`);
});
