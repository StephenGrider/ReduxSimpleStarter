Contributing to gitgraph.js
===========================

Glad to hear you'd like to help us improving the library. Here's the how-to!

## Wanna report an issue / ask for a feature?

Sounds nice! Please proceed as following:

1. **Search for existing issues.** Sometimes, other folks may have reported the same issue and it'd be nice not to duplicate them.
2. If possible, please **create an isolated and reproducible test case.** Make use of [jsFiddle](jsfiddle.net) - for instance - to share your isolated test cases. We won't hold it against you for feature requests, but a live [POC](http://en.wikipedia.org/wiki/Proof_of_concept) is sometimes easier to catch.
3. **Share as much information as possible.** Include browser and version, version of gitgraph.js, etc. where appropriate. That can help us to reproduce the bug, if so.

## Or wanna contribute to the code?

Github's Pull Request is a fantastic tool to contribute to the code.

Just keep in mind the following rules:

- Change must be done in `src/` files, eventually `test/` or `examples/`, that's all.
- You'd be nice not to pollute your pull request with unintended changes.
- Pull requests should always be against the `develop` branch, never against `master` nor `gh-pages`.

Once you send a Pull Request, your code will be check with [Travis CI](https://travis-ci.org/nicoespeon/gitgraph.js) to tell whether you break the build or not. The Travis test should pass before we accept any Pull Request.

## Check about our coding standards

Please follow our coding standards as best as you can to keep consistency over code.

The [.editorconfig](https://github.com/nicoespeon/gitgraph.js/blob/develop/.editorconfig) file should help you configure your IDE to do so.

### JS

- 2 spaces indent (no tabs)
- Use semicolons
- Use strict mode
- Strings must use double-quote

### CSS

- Adhere to the (default) [CSScomb](http://csscomb.com/) property order
- Multiple-line approach (one property and value per line)
- Always a space after a property's colon (.e.g, `display: block;` and not `display:block;`)
- End all lines with a semi-colon
- For multiple, comma-separated selectors, place each selector on its own line
- Attribute selectors, like `input[type="text"]`, should always wrap the attribute's value in double quotes, for consistency and safety (see [this blog post on unquoted attribute values](http://mathiasbynens.be/notes/unquoted-attribute-values) that can lead to XSS attacks).

### HTML

- Two spaces for indentation, never tabs
- Double quotes only, never single quotes
- Always use proper indentation
- Use tags and elements valid for an HTML5 doctype

## License

By contributing your code, you agree to license your contribution under the terms of [the MIT license](https://github.com/nicoespeon/gitgraph.js/blob/master/LICENSE.md).

[> What does that mean?](http://choosealicense.com/licenses/mit/)
