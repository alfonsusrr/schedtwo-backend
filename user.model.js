// These Mongoose Models represents users & roles collections in MongoDB database.
"use strict";
const mongoose = require("mongoose");

// User object will have a roles array that contains ids in roles collection as reference.
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;