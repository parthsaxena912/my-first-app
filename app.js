const http = require('http');

const server = http.createServer((req, res) => {
  res.end("CI/CD is working successfully it is in testing phase 🎉");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});