const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const blogRoutes = require("./routes/blogRoute");
const projectRoutes = require("./routes/projectRoute");
const errorMiddleWare = require("./middleware/error");
const cloudinary = require("cloudinary");

const { Server } = require("socket.io");

// Handling Uncaught Exception

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

// app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

// app.use(
//   express.json({
//     limit: "50mb",
//   })
// );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/image", async (req, res) => {
  // console.log(req.body);
  const myCloud = await cloudinary.uploader.upload(req.body.file, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });

  console.log(myCloud);
  res.status(200).json({ status: true, message: myCloud });
});

app.use("/api/b", blogRoutes);
app.use("/api/p", projectRoutes);

// Middleware for Error
app.use(errorMiddleWare);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connect successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const io = new Server(server, {
  cors: {
    origin: process.env.ORIGIN,
    Credential: true,
  },
});

// let idtoemailmap = new Map();
// let emailtoidmap = new Map();

// const io = new Server(server);
const userMap = {};

io.on("connection", (socket) => {
  console.log("Socket Connected ", socket.id);

  socket.on("join", (id) => {
    userMap[socket.id] = id;
    console.log(socket.id, "->", id," : joined ");
    socket.broadcast.emit("joined", { id });
  });

  // socket.on("send", ({ user, message }) => {
  //   console.log("Chat recieve from ", user, " : ", message);
  //   socket.broadcast.emit("recieve", { user, message });
  // });

  // socket.on("request", (user, callback) => {
  //   console.log("Request recieve from ", user);
  //   callback({
  //     status: "ok",
  //   });
  // });

  // socket.on("disconnecting", () => {
  //   socket.broadcast.emit("disconnected", {
  //     user: socket.id,
  //     name: userMap[socket.id],
  //   });
  //   console.log(`${socket.id} disconnected`);

  //   delete userMap[socket.id];
  //   socket.leave();
  // });
});

// io.on("connection", (socket) => {
//   console.log("Socket Connected: ", socket.id);

// socket.on("userjoin", (id) => {
//   idtoemailmap.set(socket.id, id);
//   emailtoidmap.set(id, socket.id);
//   console.log("Socket connected", socket.id, id);
// });

// socket.on("send_chat", ({ from, to, message }) => {
//   const senderid = emailtoidmap.get(to);
//   console.log(socket.id, " send chat to ", senderid, " : ", message);
//   io.to(senderid).emit("recieve_chat", { from, message });
// });

// socket.on("like", ({ from, to }) => {
//   const senderid = emailtoidmap.get(to);
//   console.log(`${from} liked ${to} project`);
//   io.to(senderid).emit("recieve_like", { from });
// });
// });

// unhandled promise rejection happen when there is any mistake in mongo url like if there is mistake in url
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log("Shutting down the server due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
