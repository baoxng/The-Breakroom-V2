const express = require("express");
const session= require("express-session")

//Chat calls
require("dotenv").config();
const cors = require("cors");
// const bodyParser = require("body-parser");
const stream= require('getstream');

// const mongoose = require("mongoose");
// const MongoDBStore= require('connect-mongodb-session')(session);
// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  // app.use(express.static("client/build")); 
}

// Add routes, both API and view
// app.use(routes);

app.use(express.static("client/build")); 

//chat body parser
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});