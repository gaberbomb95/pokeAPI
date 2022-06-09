const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./models/pokemon");
require("dotenv/config");

app.use(bodyParser.json());

//IMPORT ROUTES
const pokemonRoutes = require("./routes/pokemon");
const { default: mongoose } = require("mongoose");

// Middlewares
app.use("/pokemon", pokemonRoutes);

// ROUTES
app.get("/", (req, res) => {
  res.send("home url");
});

// Connect to db
mongoose.connect(process.env.DB_CONNECTION);

// How to start listening
app.listen(3000);
//
