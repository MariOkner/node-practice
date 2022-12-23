const fs = require("node:fs");

function handleFile(error, data) {
  if (error) {
    console.log(error);
    pricess.exit(1);
  }

  console.log(data);
}

console.log("Start");
fs.readFile("movies.txt", { encoding: "utf8" }, handleFile);
console.log("Finish");
