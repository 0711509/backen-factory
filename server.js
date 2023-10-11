const express = require("express");
const app = express();
const cloudinary = require("cloudinary");

// ------cors
const cors = require("cors");
app.use(cors());

// ---------dotenv
require("dotenv").config();

// ======== cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINERY_NAME,
  api_key: process.env.CLOUDINER_KEY,
  api_secret: process.env.CLOUDINERY_SECRET,
});

// ------------ body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

// --------- database connection
require("./DB/db");

// -------- server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// ========== socketio
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const users = [];
const messageIdSet = new Set(); // Set to track unique _id values

io.on("connection", (socket) => {
  socket.on("allmessage", (allmessage) => {
    // Assuming 'allmessage' is an array of message objects
    const extractedUsers = allmessage.map((messagedata) => {
      const { _id, conversationId, message, senderId } = messagedata;
      const socit_id = socket.id;

      // Check if the _id is not already present in the Set
      if (!messageIdSet.has(_id)) {
        // If not present, add it to the Set and push the user data
        messageIdSet.add(_id);
        return { _id, conversationId, message, senderId, socit_id };
      }
      return null; // Return null for duplicates
    });

    // Filter out null values (duplicates) and push the unique user data
    const uniqueUsers = extractedUsers.filter((user) => user !== null);
    users.push(...uniqueUsers);

    io.emit("getallmessage", users);
  });

  socket.on("sendmessage", (conversationId, senderId, message) => {
    if (!messageIdSet.has(conversationId._id)) {
      messageIdSet.add(conversationId._id);
      users.push(conversationId);
      io.emit("getallmessage", users);
    }
  });
});

// Function to generate a unique _id for new messages
function generateUniqueId() {
  // Implement your unique ID generation logic here
  // For example, you can use a library like uuid or a combination of timestamp and random numbers
}

// ------- router

// -----user
app.use("/api/user", require("./Router/UserRouter"));
// ------- 3PLAduit
app.use("/api", require("./Router/3PLAudit/3PLAduitRouter"));
// ------------ QA Aduit
app.use("/api", require("./Router/QAAduit/QAaduitroute"));
app.use("/api", require("./Router/OrganizationRouter"));
app.use("/api", require("./Router/WorkOrder"));
app.use("/api", require("./Router/AuditRouter"));
app.use("/api", require("./Router/ScheduleRouter"));

// =============== Error Handling
// --------uncaughtException
process.on("uncaughtException", (err) => {
  console.log(`uncaughtException error due to ${err.message}`);
  console.log("server is shutting down");
  server.close(() => {
    process.exit(1);
  });
});

// ------------------------- unhandledRejection
process.on("unhandledRejection", (error) => {
  console.log(`unhandledRejection Error Handle ${error.message}`);
  console.log("server shutting down");
  server.close(() => {
    process.exit(1);
  });
});

// ===================== env
// PORT = 4000

// BASE_URL = mongodb://127.0.0.1:27017/Factory

// SECRET_KEY = BJDSKFDHIUEYIEUOIEJINCIFHIUEYFIEYUOIEYUIEYIYDIOHDHFIUDHFIUEHF

// CLOUDINERY_NAME = doudu8zzx

// CLOUDINER_KEY = 292239856413154

// CLOUDINERY_SECRET = ERi4S49W2NilKcx9vAHOLQQ6-UI


// =======================
// Initialize Channels client
let channels = new Pusher('app-key', {
  cluster: 'cluster-region',
});

// Subscribe to the appropriate channel
let channel = channels.subscribe('channel-name');

// Bind a callback function to an event within the subscribed channel
channel.bind('event-name', function (data) {
  // Do what you wish with the data from the event
});

async function pushData(data) {
  const res = await fetch('/api/channels-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    console.error('failed to push data');
  }
}


