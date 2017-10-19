#/bin/bash

export DEBUG=electron-builder,electron-builder:*
mkdir -p build/
electron-builder --dir