// const fs = require("fs");
const fs = require("node:fs");

fs.readFile("movies.txt", { encoding: "utf8" }, (error, data) => {
  if (error) {
    console.log(error);
    pricess.exit(1);
  }

  console.log(data);
});

fs.readFile("movies2.txt", { encoding: "utf8" }, (error, data2) => {
  if (error) {
    console.log(error);
    pricess.exit(1);
  }

  console.log(data2);
});
