<%= moduleName %>
==

[![Travis Build Status][travis-image]][travis-url]<% if ( appveyorSupport ) { %>
[![AppVeyor Build Status][appveyor-image]][appveyor-url]<% } %>
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url]

> <%= moduleDesc %>

## Install

```
npm install --save <%= moduleName %>
```

## Usage

```js
import { <%= camelModuleName %> } from '<%= moduleName %>';
```

## License ##

[<%= moduleLicense %>](LICENSE) © [<%= name %>](<%= website %>)

<!-- Links -->
[travis-url]: https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>
[travis-image]: https://img.shields.io/travis/<%= githubUsername %>/<%= moduleName %>.svg?label=linux%20build
<% if ( appveyorSupport ) { %>
[appveyor-url]: https://ci.appveyor.com/project/<%= githubUsername %>/<%= moduleName %>
[appveyor-image]: https://img.shields.io/appveyor/ci/<%= githubUsername %>/<%= moduleName %>.svg?label=windows%20build
<% } %>
[coveralls-url]: https://coveralls.io/github/<%= githubUsername %>/<%= moduleName %>?branch=master
[coveralls-image]: https://coveralls.io/repos/github/<%= githubUsername %>/<%= moduleName %>/badge.svg?branch=master

[dep-url]: https://david-dm.org/<%= githubUsername %>/<%= moduleName %>
[dep-image]: https://david-dm.org/<%= githubUsername %>/<%= moduleName %>.svg

[devdep-url]: https://david-dm.org/<%= githubUsername %>/<%= moduleName %>#info=devDependencies
[devdep-image]: https://david-dm.org/<%= githubUsername %>/<%= moduleName %>/dev-status.svg
