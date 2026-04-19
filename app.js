const http = require('http');

const server = http.createServer((req, res) => {
  res.end("CI/CD is working successfully it is in testing phase and work is on Arvind Saxena Usha Saxena Chitransh Saxena Parth Saxena I Love my Family ");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});