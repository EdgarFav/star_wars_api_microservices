const server = require("./src/server");
// const { Character, Film, Planet } = require("./src/database");

// Character.list().then((res) => console.log(res[0]));

// Film.list().then((res) => console.log(res[0]));

// Planet.list().then((res) => console.log(res[0]));

server.listen(8004, () => {
  console.log("Database service on port 8004");
});
