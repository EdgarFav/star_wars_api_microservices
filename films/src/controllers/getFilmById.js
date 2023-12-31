const Film = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { id } = req.params;
  const film = await Film.get(id);
  response(res, 200, film);
};
