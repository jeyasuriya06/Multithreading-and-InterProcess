import { Worker } from "worker_threads";

// Runnable job
function cookingJob(task: string) {
  return new Worker("./cookingWorker.js", {
    workerData: { food: task }
  });
}

// Thread task
function cookingTask(food: string) {
  return new Worker("./cookingWorker.js", {
    workerData: { food }
  });
}

// Main execution
const t1 = cookingJob("Chicken");
const t2 = cookingJob("Eggs");
const t3 = cookingTask("Dosa");

[t1, t2, t3].forEach(worker => {
  worker.on("message", () => {});
  worker.on("error", console.error);
});
