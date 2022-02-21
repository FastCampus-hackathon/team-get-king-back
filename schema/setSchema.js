const mongoose = require("mongoose");

const setSchema = new mongoose.Schema({
  name: String,
  ids: Array,
});

const Set = mongoose.model("Set", setSchema);

module.exports = Set;
