import express from "express";
const app = express();
import http from "http"; //inbuild in express
import { Server } from "socket.io";
import { ACTIONS } from "./src/Actions.js";

const server = http.createServer(app); // http has a app object which we have passed
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5000",
    // Allow all standard methods
    methods: ["GET", "POST"],
  },
});

const userSocketMap = {}; // will store which user has joined and there socket id

// function to get all the connected clients in a particular room
const getAllConnectedClients = (roomId) => {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      };
    }
  ); // return the data of the provided roomId out of all the available rooms -> mapping over that array to get all the users socket id and username who have joined that room
};

// whenever connection would establish this event would be triggered
io.on("connection", (socket) => {
  console.log("Socket id : ", socket.id);
  socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId); // user will join the room & if the room is not already present then new room will be created
    const clients = getAllConnectedClients(roomId);
    console.log(clients);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log("server is running on port ", PORT);
});
