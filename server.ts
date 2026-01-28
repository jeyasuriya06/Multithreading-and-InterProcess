import * as net from "net";

const server = net.createServer((socket) => {
  socket.on("data", (data: Buffer) => {
    console.log("Server received:", data.toString());
    socket.write("Hello from server\n");
  });
});

server.listen(4000, () => {
  console.log("Server listening on port 4000");
});
