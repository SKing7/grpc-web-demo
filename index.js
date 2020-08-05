const { Size } = require('./pb-js/impl_pb.js');
const { LBSClient } = require('./pb-js/impl_grpc_web_pb');

const client = new LBSClient('http://localhost:8080');
const requestParam = new Size();
requestParam.setSize(10);

const getInfo = client.list(requestParam, {}, (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
getInfo.on('status', status => console.log('status', status));
getInfo.on('data', data => console.log('data', data));
getInfo.on('end', end => console.log('end', end));
getInfo.on('error', error => console.log('error', error));
