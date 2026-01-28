import { fork } from "child_process";

const child = fork("/Users/Jeya.Suriya/SOLID principles/Multithreading/dist/worker.js");
``
child.send({ value: 10 });
child.send({ value: 20 });

child.on("message", (response) => {
  console.log("Parent received:", response);
});
