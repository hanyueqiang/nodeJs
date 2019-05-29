var http = require('http');
var url = require('url');

// http.createServer(function(request, response) {
//   //发送HTTP头部
//   //http状态值：200：ok
//   //内容类型: text/plain
//   response.writeHead(200,{'Content-Type': 'text/plain'});

//   //发送响应数据
//   response.end('hello world\n');

// }).listen(8888)

// //终端打印
// console.log('server running at http://127.0.0.1:8888/');

function start(route, handle) {
  function onRequest(request, response) {
    console.log('request received');

    var pathname = url.parse(request.url).pathname;
    console.log("requset for " + pathname + " recevied")

    
    response.writeHead(200, {"Content-Type": "text/plain"});
    
    var content = route(handle, pathname);
    
    response.write(content);

    response.end();
  }
  http.createServer(onRequest).listen(8888);
  console.log('Server has start')
}
exports.start = start;