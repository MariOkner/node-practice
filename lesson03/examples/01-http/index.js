const http = require("node:http");

const server = http.createServer((request, response) => {
  const { url } = request;
  if (url === "/") {
    response.write("Home page");
  } else if (url === "/movies") {
    response.write("Movies page");
  } else {
    response.write("Not found");
  }
  response.end();
});

server.listen(3000, () => {
  console.log("server is listening on port 3000!");
});
