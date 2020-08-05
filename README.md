# gRPC-demo

https://github.com/grpc/grpc-web/blob/master/net/grpc/gateway/examples/helloworld/README.md.

##
```
// 下载proto-gen-grpc-web https://github.com/grpc/grpc-web/releases
// 安装
sudo mv ~/Downloads/protoc-gen-grpc-web-1.2.0-darwin-x86_64 /usr/local/bin/protoc-gen-grpc-web
sudo chmod +x /usr/local/bin/protoc-gen-grpc-web

protoc -I=./proto impl.proto --js_out=import_style=commonjs:./pb-js --grpc-web_out=import_style=commonjs,mode=grpcweb:./pb-js

brew cask install docker

docker run -d -v "$(pwd)"/envoy.yaml:/etc/envoy/envoy.yaml:ro \
    -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.15.0

npx webpack-cli index.js
http-server .

// visit: http://127.0.0.1:8081/test/
```: