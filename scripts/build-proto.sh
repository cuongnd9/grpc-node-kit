#!/usr/bin/env bash

cd ..

# JavaScript code generating
grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./src/rpc/models \
--grpc_out=generate_package_definition:./src/rpc/models \
-I ./protos \
./protos/*.proto

# generate d.ts codes
grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=generate_package_definition:./src/rpc/models \
-I ./protos \
./protos/*.proto
