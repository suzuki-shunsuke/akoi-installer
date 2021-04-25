# akoi-installer

[![Build Status](https://github.com/suzuki-shunsuke/akoi-installer/workflows/test/badge.svg)](https://github.com/suzuki-shunsuke/akoi-installer/actions)
[![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-shunsuke/akoi-installer.svg)](https://github.com/suzuki-shunsuke/akoi-installer)
[![License](http://img.shields.io/badge/license-mit-blue.svg?style=flat-square)](https://raw.githubusercontent.com/suzuki-shunsuke/akoi-installer/master/LICENSE)

GitHub Actions and Shell Script to install tools with [akoi](https://github.com/suzuki-shunsuke/akoi)

## GitHub Actions

### Inputs and Outputs

Please see [action.yml](action.yml)

### Example usage

Please see [example.yml](.github/workflows/example.yml)

## Shell Script

### Requirement

* curl

### How to use

```console
$ curl -sSfL https://raw.githubusercontent.com/suzuki-shunsuke/akoi-installer/v0.1.0-1/akoi-installer | sh
```

### Parameters

* VERSION: akoi version
* INSTALL_PATH: install path where akoi is installed

```console
$ curl -sSfL https://raw.githubusercontent.com/suzuki-shunsuke/akoi-installer/v0.1.0-1/akoi-installer | env VERSION=v2.2.1 INSTALL_PATH=bin/akoi sh
```

## LICENSE

[MIT](LICENSE)
