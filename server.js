const express = require("express");
const session= require("express-session")

//Chat calls
require("dotenv").config();
const cors = require("cors");
// const bodyParser = require("body-parser");
const { StreamChat } = require("stream-chat");

const mongoose = require("mongoose");
const MongoDBStore= require('connect-mongodb-session')(session);
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build")); 
}

// Add routes, both API and view
app.use(routes);

//chat body parser
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
const serverSideClient = new StreamChat(
  process.env.STREAM_API_KEY,
  process.env.STREAM_APP_SECRET
);

app.post("/join", async (req, res) => {
  const { username } = req.body;
  const token = serverSideClient.createToken(username);
  try {
    await serverSideClient.updateUser(
      {
        id: username
      },
      token
    );

    const admin = { id: "admin" };
    const channel = serverSideClient.channel("team", "chat", {
      name: "Group messaging",
      created_by: admin
    });

    await channel.create();
    await channel.addMembers([username]);
  } catch (err) {
    res.status(500).json({ err: err.message });
    return;
  }

  return res.status(200).json({ user: { username }, token });
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});