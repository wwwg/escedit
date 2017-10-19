#/bin/bash

echo "Starting build..."
export DEBUG=electron-builder,electron-builder:*
rm -rf ./build/
mkdir -p build/
echo "Building Linux x64..."
electron-builder --linux --x64 deb tar.gz
echo "Linux build complete."
echo "Building Windows ia32..."
electron-builder --win --ia32
echo "Build complete."