const hello = 'Hello World';

function getTimeString() {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
}

function getTime(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
}

function getHello(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
}

module.exports = {
  hello,
  getTimeString,
  getHello,
  getTime,
};
