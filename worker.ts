// worker.ts

process.on("message", (msg: any) => {
  console.log("Child received message:", msg);

  // response
  process.send?.({
    status: "done",
    result: msg.value * 2
  });
});

