const axios = require("axios");
// const films = require("./films.json");

module.exports = {
  // list: async () => {
  //   return films;
  // },
  list: async () => {
    const films = await axios.get("http://database:8004/Film");
    return films.data;
  },

  get: async (id) => {
    const film = await axios.get(`http://database:8004/Film/${id}`);
    return film.data;
  },

  create: async (data) => {
    const film = await axios.post("http://database:8004/Film", data);
    return film.data;
    // throw Error("Hay un error al momento de crear la pelicula");
  },
};
