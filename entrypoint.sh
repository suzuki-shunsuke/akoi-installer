#!/usr/bin/env bash

set -eu
set -o pipefail

if [ -n "$1" ]; then
  export VERSION=$1
fi

if [ -n "$2" ]; then
  export INSTALL_PATH=$2
fi

bash akoi-installer
