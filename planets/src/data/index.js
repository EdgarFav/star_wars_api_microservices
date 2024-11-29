const axios = require("axios");
// const planets = require("./planets.json");

module.exports = {
  // list: async () => {
  //   return planets;
  // },
  list: async () => {
    const planets = await axios.get("http://database:8004/Planet");
    // const planets = await axios.get("http://localhost:8004/Planet");

    return planets.data;
  },

  get: async (id) => {
    const planet = await axios.get(`http://database:8004/Planet/${id}`);
    // const planet = await axios.get(`http://localhost:8004/Planet/${id}`);
    return planet.data;
  },

  create: async (data) => {
    const character = await axios.post("http://database:8004/Planet", data);
    return character.data;
    // throw Error("Hay un error al momento de crear el planeta");
  },
};
