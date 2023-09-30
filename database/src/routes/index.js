const { Router } = require("express");
const store = require("../database");
const { validateModel } = require("../middlewares");

// const { Character, Film, Planet } = require("../database");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const response = await store[model].list(); // Esta es la forma simplificada con params
  res.status(200).json(response);
});

router.get("/:model/:id", validateModel, async (req, res) => {
  const { model, id } = req.params;
  const response = await store[model].get(id);
  res.status(200).json(response);
});

router.post("/:model", validateModel, async (req, res) => {
  const { model } = req.params;
  const data = req.body;
  const response = await store[model].insert(data);
  res.status(200).json(response);
});

// router.get("/character", async (req, res) => {
//   const response = await Character.list();
//   res.status(200).json(response);
// });

// router.get("/film", async (req, res) => {  >>>>>>>>>>>>> De manera individual se puede hacer asi
//   const response = await Film.list();
//   res.status(200).json(response);
// });

// router.get("/planet", async (req, res) => {
//   const response = await Planet.list();
//   res.status(200).json(response);
// });

module.exports = router;
