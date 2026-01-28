import * as net from "net";

const client = net.createConnection(4000, "127.0.0.1", () => {
  client.write("Hello from client\n");
});

client.on("data", (data: Buffer) => {
  console.log("Client received:", data.toString());
});
