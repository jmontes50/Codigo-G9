const http = require("http");

const server = http.createServer((request, response) => {
  //? cuando la URL que venga del servidor sea /, es decir lo que esta se
  //? despues de localhost:3000/productos
  console.log(request.url);
  if (request.url === "/") {
    response.writeHead(200);
    response.write("Hola mundo");
    response.end();
  }

  if (request.url === "/productos") {
    response.writeHead(200);
    response.write("Hola Productos");
    response.end();
  }

  if (request.url === "/casa") {
    response.writeHead(200);
    response.write("Hola Casa");
    response.end();
  }
});

server.listen(9000, () => console.log("El servidor se inicio 9000"));

//? mitienda.com => mitienda.com:80
//? mitienda.com:3000 => mitienda.com:3000
