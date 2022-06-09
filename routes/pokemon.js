// imports
const express = require("express");
const router = express.Router();
const Pokemon = require("../models/pokemon");

// Returns list of all pokemon
router.get("/", async (req, res) => {
  try {
    const pokemonList = await Pokemon.find();
    res.json(pokemonList);
  } catch (err) {
    res.json({ message: err });
  }
});
// end of code

// Submits new pokemon
router.post("/", async (req, res) => {
  const pokemon = new Pokemon({
    id: req.body.id,
    name: req.body.name,
  });
  try {
    const savedPokemon = await pokemon.save();
    res.json(savedPokemon);
  } catch (err) {
    res.json({ message: err });
  }
});
// end of code

// Get specific pokemon by id number
router.get("/:pokemonId", async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ id: req.params.pokemonId });
    res.json(pokemon);
  } catch (err) {
    res.json({ message: err });
  }
});
// end of code

// exporting
module.exports = router;
