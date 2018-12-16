const mongoose = require("mongoose");
var user = mongoose.model("user", {
  username: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true
  }
});

module.exports = { user };
