const http = require('http'); //core module 가져오기
const routes = require('./routes');
console.log(routes.someText);
const server = http.createServer(routes.handler);

server.listen(3000);
