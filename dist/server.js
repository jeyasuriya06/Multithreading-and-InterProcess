"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const server = net.createServer((socket) => {
    socket.on("data", (data) => {
        console.log("Server received:", data.toString());
        socket.write("Hello from server\n");
    });
});
server.listen(4000, () => {
    console.log("Server listening on port 4000");
});
