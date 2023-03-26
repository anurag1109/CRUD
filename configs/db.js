const mongoose = require("mongoose");
const connection = mongoose.connect(
  "mongodb+srv://anurag:anurag@cluster0.gq8lgqs.mongodb.net/linkedin?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
