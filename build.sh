#/bin/bash

echo "Starting build..."
export DEBUG=electron-builder,electron-builder:*
rm -rf ./build/
mkdir -p build/
echo "Building for Linux x64 (unpacked)"
electron-builder --dir --asar --platform=linux --arch=x64