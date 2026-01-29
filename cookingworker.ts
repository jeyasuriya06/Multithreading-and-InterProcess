import { parentPort, workerData } from "worker_threads";

const { food } = workerData;

console.log(
  `${food} is being prepared by worker ${process.pid}`
);

parentPort?.postMessage("done");
