#!/bin/bash
node_version=$(node -v)
if [ "$node_version" != "v8.7.0" ]; then
	echo -n "You need at least node 8.7.0 in order to run escedit. Your current node version: "
	echo $node_version
	exit 0
fi
clear
# node --harmony src/index.js
./node_modules/electron/dist/electron .