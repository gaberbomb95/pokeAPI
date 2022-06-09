const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("pokemon", pokemonSchema);
