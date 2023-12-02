// 解析URL查询参数
// const queryParams = new URLSearchParams(window.location.search);
// const tableId = queryParams.get('table_id'); // 获取table_id参数

var ros = new ROSLIB.Ros({
  url: 'wss://172.20.10.5:9090'
});

ros.on('connection', function () {
  console.log('Connected to websocket server.');
});

ros.on('error', function (error) {
  console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function () {
  console.log('Connection to websocket server closed.');
});

// 当用户点击按钮时，发送请求到后端
document.getElementById('callButton').addEventListener('click', function () {

  // Publishing a Topic
  // ------------------

  var pos_pub = new ROSLIB.Topic({
    ros: ros,
    name: '/CallPos',
    messageType: 'std_msgs/Int32'
  });

  var msg = new ROSLIB.Message({
    data: 1
  });

  pos_pub.publish(msg);
  console.log('Publish:', msg.data);

  // 假设URL中的位置信息是这样的：?location=12345
  // const queryParams = new URLSearchParams(window.location.search);
  // const location = queryParams.get('location'); // 获取位置信息

  // 使用fetch API发送位置信息到后端
  // fetch('/call-trashbot', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ location: location }),
  // })
  // .then(response => response.json())
  // .then(data => {
  //   alert('Trashbot has been called to your location!');
  //   console.log(data); // 可以在这里处理后端返回的数据
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });

});

