const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("../mongoose/mongoose");
var { Todo } = require("../models/Todo");
var { user } = require("../models/user");

var app = express();
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var newUser = new user({
    username: req.body.username,
    password: req.body.password
  });
  newUser.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.send(e);
    }
  );
});

app.listen("3000", () => {
  console.log("Started server on 3000");
});
