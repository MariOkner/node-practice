const { request, response } = require("express");
const express = require("express");

const app = express();

const PORT = 3000;

app.get("/movies", (request, response) => {
  response.send("Movies");
});

app.get("/", (request, response) => {
  response.send("Home page");
});

app.listen(`${PORT}`, () => {
  console.log(`Server is listeing on port ${PORT} `);
});
