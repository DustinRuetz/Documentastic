# Documentastic

A Markdown-to-HTML converter that is designed to be flexible, lightweight, and platform-agnostic. Documentastic is intended to be used locally, i.e. `dev\*.md` files compile to `public\*.html` files, the latter of which can be viewed locally in the browser whether on a desktop computer, tablet, phone, etc.

## Installation & Usage

```
npm install
gulp
```

1. Make a copy of `dev\template.md` and rename it.
1. Open the file and document until your heart's content.

## Philosophy

Documentation is an invaluable tool in development (and, as I have found, also in life). The intention of this Gulp task is threefold:

1. To use the elegant simplicity of Markdown to write maintainable, well-formatted documentation.
1. To dynamically generate a table-of-contents (TOC) from the document's headings.
1. To compile the Markdown file into a platform-agnostic HTML document.

## Features

* Dynamically-generated table-of-contents (TOC) via [gulp-doctoc][gulp-doctoc].
* Automatic Markdown-to-HTML conversion via [gulp-marked][gulp-marked].
* Gulp `watch` tasks to monitor/update changes to `.md` `.css` `.js` files.
* CSS styling via the [GitHub Markdown Stylesheet][gh-md-ss].
* Smooth-scrolling on all internal document links via [jquery-smooth-scroll][jq-ss].

## Licence

[MIT Licence][mit-licence]

[gulp-doctoc]: https://www.npmjs.com/package/gulp-doctoc
[gulp-marked]: https://www.npmjs.com/package/gulp-marked
[gh-md-ss]: https://gist.github.com/tuzz/3331384
[jq-ss]: https://www.npmjs.com/package/jquery-smooth-scroll

[mit-licence]: https://opensource.org/licenses/MIT