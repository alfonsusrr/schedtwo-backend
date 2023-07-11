"use strict";
// import express and cors modules
// express is for building the Rest APIs
// cors provides Express middleware to enable CORS
const express = require("express");
const cors = require("cors");

// create an Express app.  Notice that
// we set origin: 'http://localhost:2001'
const app = express()

let corOptions = {
  origin: "http://localhost:2001"
};

// add request body parser and cors middlewares using app.use() method.
app.use(express.json());
app.use(cors(corOptions));
app.use(express.urlencoded({ extended: true }));

// open Mongoose connection to MongoDB database
const db = require(".../models");
const Role = db.role;

// encode username and password
const username = encodeURIComponent("userID");
const password = encodeURIComponent("password");

db.mongoose
  .connect(`mongodb+srv://${username}:${password}@cluster0.5xpioyj.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// define a GET route which is simple for test.
app.get("/", (req, res) => {
  res.json({"message": "welcome to schedTwo planner"});
});

// routes
require('.../routes/auth.routes.js')(app);
require('.../routes/user.routes.js')(app);

// listen on port 2000 for incoming requests.
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}