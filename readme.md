# Documentastic

A Markdown-to-HTML converter that is designed to be flexible, lightweight, and platform-agnostic.

This tool was developed with the intention of being used locally, i.e. `dev\*.md` files compile to `public\*.html` files, the latter of which can be viewed locally in a browser regardless of device. My personal use-case employs [BitTorrent Sync](bt-sync) to sync the contents of `public\` to my mobile phone, which ensures I always have access to my documentation on my two primary computing platforms.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation and Usage](#installation-and-usage)
- [Philosophy](#philosophy)
- [Features](#features)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation and Usage

```
npm install
gulp
```

1. Make a copy of `dev\template.md` and rename it.
1. Open the file and document until your heart's content.

## Philosophy

Documentation is an invaluable tool in development (and, as I have found, also in life). The goal of this project is as follows:

1. To use the elegant simplicity of Markdown to write maintainable, well-formatted documentation;
1. To dynamically generate a table-of-contents (TOC) from the document's headings;
1. To compile the Markdown file into a platform-agnostic HTML document; and
1. If desired, to be able to print out documentation and have it be well-formed.

## Features

* Dynamically-generated table-of-contents (TOC) provided by [gulp-doctoc][gulp-doctoc].
* Automatic Markdown-to-HTML conversion provided by [gulp-marked][gulp-marked].
* Gulp `watch` tasks to monitor/update changes to `.md` `.css` `.js` files.
* CSS styling provided by the [GitHub Markdown Stylesheet][gh-md-ss].
* Smooth-scrolling on all internal links via [jquery-smooth-scroll][jq-ss].
* `target="_blank"` attribute automatically added to all external links.
* Documents are designed to be responsive and scale gracefully according to device screen size.
* All documents are printer-friendly by default.

## Licence

[MIT Licence][mit-licence]

[bt-sync]: https://getsync.com/

[gulp-doctoc]: https://www.npmjs.com/package/gulp-doctoc
[gulp-marked]: https://www.npmjs.com/package/gulp-marked
[gh-md-ss]: https://gist.github.com/tuzz/3331384
[jq-ss]: https://www.npmjs.com/package/jquery-smooth-scroll

[mit-licence]: https://opensource.org/licenses/MIT