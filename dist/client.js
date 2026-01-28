"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const client = net.createConnection(4000, "127.0.0.1", () => {
    client.write("Hello from client\n");
});
client.on("data", (data) => {
    console.log("Client received:", data.toString());
});
