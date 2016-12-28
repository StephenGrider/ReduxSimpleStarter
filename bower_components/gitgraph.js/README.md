![gitgraph.js](/assets/logo/gitgraph-logo.png)

[![Build Status](https://secure.travis-ci.org/nicoespeon/gitgraph.js.png)](http://travis-ci.org/nicoespeon/gitgraph.js) [![devDependency Status](https://david-dm.org/nicoespeon/gitgraph.js/dev-status.png)](https://david-dm.org/nicoespeon/gitgraph.js#info=devDependencies)
===========

A JavaScript library to draw pretty git graphs in the browser.

Project page: <http://gitgraphjs.com/>

## How to start

You have different options to start with the library:

- [Download the latest release](https://github.com/nicoespeon/gitgraph.js/releases/latest).
- Clone the repo: `git clone git://github.com/nicoespeon/gitgraph.js.git`.
- Install with [Bower](http://bower.io/): `bower install gitgraph.js`.
- Use [the CDNjs hosted lib](https://cdnjs.com/libraries/gitgraph.js).

Production files are available under the `build/` directory.

## Report a bug / Ask for a feature

You found some nasty bug or have a cool feature request? [Just open a new issue](https://github.com/nicoespeon/gitgraph.js/issues).

Please have a look at [the Issue Guidelines](https://github.com/necolas/issue-guidelines/blob/master/CONTRIBUTING.md) from [Nicolas Gallagher](https://github.com/necolas) before doing so.

## Documentation

The JavaScript source code is documented with [JSDoc](http://usejsdoc.org/).

## Contributing

Editor preferences are available in [the editor config](https://github.com/nicoespeon/gitgraph.js/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.

The project uses [Grunt](http://gruntjs.com) with convenient methods for our workflow. It's how we lint our code, run tests, generate documentation, etc. To use it, install the required dependencies as directed and then run the following Grunt commands.

### Install Grunt

From the command line:

- Install `grunt-cli` globally with `npm install -g grunt-cli`.
- Install [the necessary local dependencies](https://github.com/nicoespeon/gitgraph.js/blob/master/.editorconfig) with `npm install`.

When completed, you'll be able to run the various Grunt commands provided from the command line.

[> Need more information about how to get started with Grunt?](http://gruntjs.com/getting-started)

### Available Grunt commands

#### test code - `grunt test`

Check source code against [JSHint](http://www.jshint.com/) then runs unit tests with [Jasmine](http://pivotal.github.io/jasmine/).

#### generate documentation - `grunt doc`

Generate source code documentation into `dist/docs/` (not versioned) with [JSDoc](http://usejsdoc.org/).

#### compile a non-versioned release - `grunt dist`

Clean `dist/` directory, lint code, output the minified release into `dist/gitgraph.min.js` and generate the documentation into `dist/docs/`.

#### compile a new release - `grunt release`

Lint code, output the source and minified releases into `build/` and generate the official documentation into `docs/`.

#### open a live reload server - `grunt server`

For a better code experience, this grunt task opens a live server in your favorite browser. This server is automatically reloaded when you save a project file.

Please note that `examples/index.html` is the default file for testing ;)

## Versioning

We use [SemVer](http://semver.org/) as a guideline for our versioning here.

### What does that mean?

Releases will be numbered with the following format:

```
<major>.<minor>.<patch>
```

And constructed with the following guidelines:

- Breaking backward compatibility bumps the `<major>` (and resets the `<minor>` and `<patch>`)
- New additions without breaking backward compatibility bumps the `<minor>` (and resets the `<patch>`)
- Bug fixes and misc. changes bumps the `<patch>`

## Authors and contributors

**Nicolas Carlo** - [@nicoespeon](https://twitter.com/nicoespeon) } <http://nicoespeon.com>

**Fabien Bernard** - [@fabien0102](https://twitter.com/fabien0102)

## Copyright and License

Copyright (c) 2013 Nicolas CARLO and Fabien BERNARD under [the MIT license](https://github.com/nicoespeon/gitgraph.js/blob/master/LICENSE.md).

[> What does that mean?](http://choosealicense.com/licenses/mit/)
