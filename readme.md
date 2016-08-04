# Documentastic

A Markdown-to-HTML converter that is feature-rich, flexible, lightweight, and platform-agnostic.

This tool was developed with the intention of being used locally, i.e. `dev/*.md` files compile to `public/*.html` files, the latter of which can be viewed locally in a browser regardless of device.

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
1. To compile the Markdown file into a platform-agnostic HTML document; and
1. If desired, to be able to print out documentation and have it be well-formed.

## Features

* Dynamically-generated table-of-contents (TOC) provided by [gulp-doctoc][gulp-doctoc].
* Markdown-to-HTML conversion provided by [gulp-marked][gulp-marked].
* Code injection of mandatory `html`, `head`, and `body` elements provided by [gulp-inject][gulp-inject].
* Proper line breaks and indentation in compiled HTML document provided by [gulp-prettify][gulp-prettify].
* CSS styling provided by the [GitHub Markdown Stylesheet][gh-md-ss].
* Smooth-scrolling on all internal links via [jquery-smooth-scroll][jq-ss].
* Document's `title` automatically generated from `h1` tag contents.
* `target="_blank"` attribute automatically added to all external links.
* Documents are designed to be responsive and scale gracefully according to device screen size.
* All documents are printer-friendly by default.

## Licence

[MIT Licence][mit-licence]

&#169; Copyright 2016 Dustin Ruetz.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[bt-sync]: https://getsync.com/

[gulp-doctoc]: https://www.npmjs.com/package/gulp-doctoc
[gulp-marked]: https://www.npmjs.com/package/gulp-marked
[gulp-inject]: https://www.npmjs.com/package/gulp-inject
[gulp-prettify]: https://www.npmjs.com/package/gulp-prettify
[gh-md-ss]: https://gist.github.com/tuzz/3331384
[jq-ss]: https://www.npmjs.com/package/jquery-smooth-scroll

[mit-licence]: https://opensource.org/licenses/MIT