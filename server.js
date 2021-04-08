// Requiring necessary npm packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
// var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(logger("dev"));

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

mongoose.connect(
    process.env.MONGODB_URI|| "mongodb://localhost/workout",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Syncing our database and logging a message to the user upon success
app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
  
  
    
 
  
