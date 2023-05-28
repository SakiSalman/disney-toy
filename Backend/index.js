const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const data = require("./data/recipe.json");
const chef = require("./data/checf.json");
const cors = require("cors");

// initialize app
const app = express();
app.use(cors());
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// APIs
// get all recipe
app.get("/recepe", (req, res) => {
  res.status(200).json({
    success: true,
    data,
  });
});
// get singel Reciepe
app.get("/recepe/:id", (req, res) => {
  const { id } = req.params;

  const item = data.find((data) => data.id == id);

  if (!item) {
    return res.send({
      error: true,
      message: "No Item Found",
      item: {},
    });
  }
  // get chef related to each reciepe
  const chefs = chef.find((data) => data.id == item.chef.id);

  return res.status(200).json({
    success: true,
    item,
    chefs,
  });
});
// get all chef
app.get("/chef", (req, res) => {
  res.status(200).json({
    success: true,
    chef,
  });
});

// get singel Reciepe
app.get("/chef/:id", (req, res) => {
  const { id } = req.params;

  // get singel chef
  const chefs = chef.find((data) => data.id == id);
  if (!chefs) {
    return res.send({
      error: true,
      message: "No Item Found",
      chefs: {},
    });
  }
  // find recepe under this chef
  let recepe = [];
  data.forEach((item) => {
    if (item.chef.id == id) {
      recepe.push(item);
    }
  });

  return res.status(200).json({
    success: true,
    chefs,
    recepe,
  });
});

// Server Port
const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server_running on ${PORT}`.bgCyan.black);
});
