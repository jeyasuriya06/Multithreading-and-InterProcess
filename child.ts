
process.stdin.on("data", (data: Buffer) => {
  const message = data.toString().trim();
  console.log(`Child received: ${message}\n`);
});

process.stdout.write('Hello from child process');