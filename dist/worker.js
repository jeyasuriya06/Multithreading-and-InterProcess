// worker.ts
process.on("message", (msg) => {
    console.log("Child received message:", msg);
    // response
    process.send?.({
        status: "done",
        result: msg.value * 2
    });
});
