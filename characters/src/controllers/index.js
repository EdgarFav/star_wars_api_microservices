const { catchedAsync } = require("../utils");

module.exports = {
  getCharacterById: catchedAsync(require("./getCharacterById")),
  getCharacters: catchedAsync(require("./getCharacters")),
  createCharacter: catchedAsync(require("./createCharacter")),
};
