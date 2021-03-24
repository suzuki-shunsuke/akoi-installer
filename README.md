# akoi-installer

[![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/akoi-installer.svg)](https://github.com/suzuki-shunsuke/akoi-installer)
[![License](http://img.shields.io/badge/license-mit-blue.svg?style=flat-square)](https://raw.githubusercontent.com/suzuki-shunsuke/akoi-installer/master/LICENSE)

Script to install tools with [akoi](https://github.com/suzuki-shunsuke/akoi)

## Requirement

* curl

## How to use

```console
$ curl -sSfL https://raw.githubusercontent.com/suzuki-shunsuke/akoi-installer/v0.1.0-0/akoi-installer | sh
```

## Parameters

* VERSION: akoi version
* INSTALL_PATH: install path where akoi is installed

```console
$ curl -sSfL https://raw.githubusercontent.com/suzuki-shunsuke/akoi-installer/v0.1.0-0/akoi-installer | env VERSION=v2.2.1 INSTALL_PATH=bin/akoi sh
```

## LICENSE

[MIT](LICENSE)
