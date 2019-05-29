var http = require('http');

http.createServer(function(request, response) {
  //发送HTTP头部
  //http状态值：200：ok
  //内容类型: text/plain
  response.writeHead(200,{'Content-Type': 'text/plain'});

  //发送响应数据
  response.end('hello world\n');

}).listen(8888)

//终端打印
console.log('server running at http://127.0.0.1:8888/');