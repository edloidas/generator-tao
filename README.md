Generator Tao
=============

[![node][node-image]][node-url]
[![Travis Build Status][travis-image]][travis-url]
[![AppVeyor Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url]

> 道 - a simple way to initialize your project.

## About ##

[Tao][tao-wiki-url] is a lightweight JavaScript project scaffolder, that asks minimum questions and remembers your preferences after the first run.

_Repeat less. Do more._

**Attribution:**
Originally, `tao` was a rework of the [zen][zen-url] generator. Check it out. It is also great.

## Install ##

```
npm install --global yo generator-zen
```

## Usage ##

```
yo tao
```

`tao` will remember you preferences after the first run, so you will need to answer only the questions about the module itself.
You can tell `tao` to ask `--all/-a` questions or `--skip/-s` as much as possible.

```
λ yo tao --help
Usage:
  yo tao:app [options] [<name>]

Options:
  -h,   --help          # Print the generator's options and usage
        --skip-cache    # Do not remember prompt answers             Default: false
        --skip-install  # Do not automatically install dependencies  Default: false
  -d,   --debug         # Debug mode                                 Default: false
  -a,   --all           # Ask all questions                          Default: false
  -s,   --skip          # Ask required questions only                Default: false

Arguments:
  name  # Project’s name
        change the current working directory to newly created
        and initialize project in that directory
  Type: String  Required: false
```

#### What's next? ####

1. Commit and push.
2. Enable your project on [Travis CI][travis-profile]
3. Enable your project on [AppVeyor][appveyor-profile]
4. Enable your project on [Coveralls][coveralls-profile]
5. Write some code and run `npm run fix` to make ESLint fix problems  in code for you.
6. ???
7. PROFIT


## License ##

[MIT](LICENSE) © [Mikita Taukachou](https://edloidas.com)

<!-- Links -->
[tao-wiki-url]: https://en.wikipedia.org/wiki/Tao

[zen-url]: https://github.com/iamstarkov/generator-zen/

[travis-profile]: https://travis-ci.org/profile
[appveyor-profile]: https://ci.appveyor.com/projects/new
[coveralls-profile]: https://coveralls.io/repos/new

[node-url]: https://nodejs.org/en/download/current/
[node-image]: https://img.shields.io/node/v/generator-tao.svg?style=flat-square

[travis-url]: https://travis-ci.org/edloidas/generator-tao
[travis-image]: https://img.shields.io/travis/edloidas/generator-tao.svg?label=linux%20build

[appveyor-url]: https://ci.appveyor.com/project/edloidas/generator-tao
[appveyor-image]: https://img.shields.io/appveyor/ci/edloidas/generator-tao.svg?label=windows%20build

[coveralls-url]: https://coveralls.io/github/edloidas/generator-tao?branch=master
[coveralls-image]: https://coveralls.io/repos/github/edloidas/generator-tao/badge.svg?branch=master

[dep-url]: https://david-dm.org/edloidas/generator-tao
[dep-image]: https://david-dm.org/edloidas/generator-tao.svg

[devdep-url]: https://david-dm.org/edloidas/generator-tao#info=devDependencies
[devdep-image]: https://david-dm.org/edloidas/generator-tao/dev-status.svg
