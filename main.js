//引入events
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandle = function connected() {
  console.log('连接成功。');

  //触发data_received事件
  eventEmitter.emit('data_recieved');
}

//绑定connection事件处理程序
eventEmitter.on('connection', connectHandle);

//使用匿名函数绑定data_recieved事件
eventEmitter.on('data_recieved', function() {
  console.log('数据接收成功。');
});

//触发connection 事件
eventEmitter.emit('connection');

console.log('程序执行完毕。');