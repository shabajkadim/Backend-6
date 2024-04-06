const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req, "req");
  if (req.method === "GET" && req.url === "/books") {
    res.end("books");
  } else if (req.method === "GET" && req.url === "/welcome") {
    res.end("Welcome");
  } else if (req.method === "GET" && req.url === "/bye") {
    res.end("bye");
  }else if(req.method === "GET" && req.url === "/storage"){
    res.end("storage");
  }else {
    res.end("url undefined.");
  }
});

server.listen(3001, () => {
  console.log("Server listening on port 3001;");
});