const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connectDB = require("./models/pokemon");
const { default: mongoose } = require("mongoose");
require("dotenv/config");

// Connect to db
const pokemonRoutes = require("./routes/pokemon");
mongoose.connect(process.env.DB_CONNECTION);

app.use(bodyParser.json());

const PORT = process.env.PORT || 8080;

// Middlewares
app.use("/pokemon", pokemonRoutes);

// ROUTES
app.get("/", (req, res) => {
  res.send("home url");
});

// How to start listening
app.listen(PORT, () => {
  console.log("Server is ready to receive request");
});
