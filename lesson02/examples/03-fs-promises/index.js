// const fs = require("fs/promises");
const fs = require("node:fs/promises");

async function main() {
  try {
    // const data = await fs.readFile("movies.txt", { encoding: "utf8" });
    // console.log(data);
    // const data2 = await fs.readFile("movies2.txt", { encoding: "utf8" });
    // console.log(data2);

    // await fs.writeFile("movies2.txt", "Line2");
    // await fs.writeFile("movies2.txt", "Line3");

    await fs.appendFile("movies2.txt", "Line4\n");
    await fs.appendFile("movies2.txt", "Line5\n");

    await fs.unlink("movies2.txt");
  } catch {
    console.log(error);
    process.exit(1);
  }
}
main();
