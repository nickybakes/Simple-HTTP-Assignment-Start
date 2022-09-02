const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

function onRequest(request, response) {
  console.log(request.url);
}

http.createServer(onRequest).listen(port, () => {
  console.log(`Listing on 127.0.0.1:${port}`);
});
