const axios = require("axios");
// const characters = require("./characters.json");

module.exports = {
  // list: async () => {
  //   return characters;
  // },
  list: async () => {
    const characters = await axios.get("http://database:8004/Character");
    return characters.data;
  },

  get: async (id) => {
    const character = await axios.get(`http://database:8004/Character/${id}`);
    return character.data;
  },

  create: async (data) => {
    const character = await axios.post("http://database:8004/Character", data);
    return character.data;
    // throw Error("Hay un error al momento de crear el personaje");
  },
};
