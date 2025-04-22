// Import the http module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the welcome message
  res.end('Welcome to Attendlytical server!');
});

// Set the port (default to 4000)
const port = process.env.PORT || 4000;

// Start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
