const { catchedAsync } = require("../utils");

module.exports = {
  getPlanetById: catchedAsync(require("./getPlanetById")),
  getPlanets: catchedAsync(require("./getPlanets")),
  createPlanet: catchedAsync(require("./createPlanet")),
};
