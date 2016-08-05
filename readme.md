# Documentastic

A Markdown-to-HTML documentation generator that is feature-rich, flexible, lightweight, and platform-agnostic.

This tool was developed with the intention of being used locally, i.e. `dev/*.md` files compile to `public/*.html` files, the latter of which can be viewed locally in any browser regardless of device. An example of the output can be found by viewing my notes on Markdown syntax in `public/dev_markdown.html`.

My personal use-case employs [BitTorrent Sync][bt-sync] to sync the contents of `public/` to my mobile phone, which ensures I always have access to my documentation on my two primary computing platforms.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [Usage](#usage)
- [Philosophy](#philosophy)
- [Features](#features)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install
```

## Usage

1. Make a copy of `dev/template.md` and rename it.
1. Run the `gulp` command to start the tasks.
1. Open the new file and document until your heart is content.

## Philosophy

Documentation is an invaluable tool in development (and, as I have found, also in life). The goal of this project is as follows:

1. To use the elegant simplicity of Markdown to write maintainable, well-formatted documentation;
1. To dynamically generate a table-of-contents (TOC) from the document's headings;
1. To compile the Markdown file into a responsive, spec-compliant, platform-agnostic HTML document; and
1. If desired, to be able to print out documentation and have it be well-formed.

## Features

* **Lightweight**: All features are written in vanilla JavaScript and run server-side via the Gulp task. The only JavaScript that runs client-side is jquery-smooth-scroll.
* **Efficient**: Only the documentation files that have been modified are run through the task. Courtesy of [gulp-changed][gulp-changed].
* **Table of Contents**: Manually trying to maintain TOCs is a headache. This is why Documentastic uses [gulp-doctoc][gulp-doctoc] to automatically generate a dynamic TOC for you based on the structure of your document's headings.
* **Easy to Read, Easy to Write**: Reading and writing in Markdown couldn't be simpler... as long as you're at a computer. If you're on a mobile device, why should you download yet _another_ app just to read Markdown files? Documentastic uses [gulp-marked][gulp-marked] to take your Markdown files and create platform-agnostic HTML documents from them so that they can be read in any browser.
* **Function or Form - Why Not Both?**: For best browser compatibility and to avoid nasty surprises, HTML documents should be well-formed and comply with the W3C specification.
	* Documentastic keeps your working Markdown file clean _and_ your published HTML document compliant by using [gulp-inject][gulp-inject] to inject HTML code partials containing the required `<doctype>`, `<html>`, `<head>`, and `<body>` elements.
	* If you want to review the published HTML document's code directly, [gulp-prettify][gulp-prettify] has got you covered with proper line breaks and indentation.
* **DOM Manipulation**: Documentastic uses [gulp-dom][gulp-dom] to automatically add a `title` to all documents and a `target="_blank"` attribute to all external links.
* **Platform-Agnostic**: Free yourself from the chains of platform dependency and vendor lock-in. As long as you have a browser, you can read your documents.
* **Responsive**: Documents are responsive and will scale gracefully according to device screen size.
* **Stylin'**: CSS styling courtesy of the [GitHub Markdown Stylesheet][gh-md-ss].
* **Printer-Friendly**: Documents are printer-friendly by default.
* **Smooth Moves**: Smooth-scrolling is added to all internal links (i.e. everything in the document's TOC) courtesy of [jquery-smooth-scroll][jq-ss].

## Licence

[MIT Licence][mit-licence]

&#169; Copyright 2016 Dustin Ruetz.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[bt-sync]: https://getsync.com/

[gulp-changed]: https://www.npmjs.com/package/gulp-changed
[gulp-doctoc]: https://www.npmjs.com/package/gulp-doctoc
[gulp-marked]: https://www.npmjs.com/package/gulp-marked
[gulp-inject]: https://www.npmjs.com/package/gulp-inject
[gulp-prettify]: https://www.npmjs.com/package/gulp-prettify
[gulp-dom]: https://www.npmjs.com/package/gulp-dom
[gh-md-ss]: https://gist.github.com/tuzz/3331384
[jq-ss]: https://www.npmjs.com/package/jquery-smooth-scroll

[mit-licence]: https://opensource.org/licenses/MIT