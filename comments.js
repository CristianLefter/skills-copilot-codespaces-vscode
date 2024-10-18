// Create web server
// Create a new file named comments.js in the server directory. This file will contain code to create a web server and listen on port 3000.

// Import the http module and assign it to the http variable.
// Call the createServer() method on the http object. Pass a callback function as an argument to createServer(). The callback function should accept two arguments: request and response.
// Inside the callback function, call the writeHead() method on the response object. Pass two arguments to writeHead(): 200 and { 'Content-Type': 'text/plain' }.
// Call the end() method on the response object. Pass the string 'Hello, World!' as an argument to end().
// Call the listen() method on the server object. Pass 3000 as an argument to listen().
// Export the server object using module.exports.
// Your code should look like this:

// var http = require('http');

// var server = http.createServer(function(request, response) {
//   response.writeHead(200, { 'Content-Type': 'text/plain' });
//   response.end('Hello, World!');
// });

// server.listen(3000);

// module.exports = server;