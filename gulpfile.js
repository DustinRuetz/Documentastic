"use strict";

// required modules
const gulp = require("gulp"),
		changed = require("gulp-changed"), // build tool - only process modified files
		doctoc = require("gulp-doctoc"), // markup - automatic TOC generation
		marked = require("gulp-marked"), // markup - MD to HTML converter
		inject = require("gulp-inject"), // markup - injection of code partials
		dom = require("gulp-dom"), // build tool - run DOM operations on inbound HTML
		prettify = require("gulp-prettify"); // markup - proper indentation and line breaks for HTML

// default tasks to run on "gulp" command
gulp.task("default",
	[
		"documentastic",
		"readmeTOC"
	],
	() => {
		// files to watch and tasks to run
		gulp.watch("dev/*.md", ["documentastic"]);
		gulp.watch("readme.md", ["readmeTOC"]);
	}
);

// documentastic task
// 1) source: MD files from dev/ pipe into...
// 2) changed: monitors HTML files from public/ and only the modified files are piped into...
// 3) doctoc: generates TOC, then pipes into...
// 4) marked: converts MD to HTML, then pipes into...
// 5) inject (1 of 2): injects code into top of HTML document at corresponding tag, then pipes into...
// 6) inject (2 of 2): injects code into bottom of HTML document at corresponding tag, then pipes into...
// 7) dom: manipulates several HTML DOM elements (see below comments for details), then pipes into...
// 7) prettify: adds automatic indentation to HTML document, then pipes into...
// 8) destination: public/ which contains compiled HTML files
gulp.task("documentastic", () => {
	return gulp.src("dev/*.md")
		// note: after making a change to one of the injected .html partial files,
		// comment-out "changed" pipe (below), then run the default "gulp" task
		// in order to update all of your files at once
		.pipe(changed("public/", {
			extension: ".html"
		}))
		.pipe(doctoc())
		.pipe(marked())
		.pipe(inject(gulp.src(["public/partials/p1-top.html"]), {
			starttag: "<!-- inject:p1-top:{{ext}} -->", // tag specifying point of injection
			removeTags: true, // removes injection tags from HTML file after injection is complete
			transform: (filePath, file) => {
				return file.contents.toString("utf8")
			}
		}))
		.pipe(inject(gulp.src(["public/partials/p2-bottom.html"]), {
			starttag: "<!-- inject:p2-bottom:{{ext}} -->", // tag specifying point of injection
			removeTags: true, // removes injection tags from HTML file after injection is complete
			transform: (filePath, file) => {
				return file.contents.toString("utf8")
			}
		}))
		.pipe(dom(function() {
			let docTitle = this.querySelector("h1").innerHTML; // store docTitle by getting contents of <h1>
			this.querySelector("head title").innerHTML = docTitle; // use docTitle to update contents of <title>

			// find all external links (href starts with http:// or https://)
			let extLinks = this.querySelectorAll("a[href^='http://'], a[href^='https://']");
			// add target="_blank" attribute to each item
			for (let x = 0; x < extLinks.length; x++) {
				extLinks[x].setAttribute("target", "_blank");
			}

			return this;
		}))
		.pipe(prettify({
			indent_with_tabs: true,
			indent_size: 3,
			preserve_newlines: true
		}))
		.pipe(gulp.dest("public/"));
});

// readmeTOC task
// 1) source: readme.md file pipes into...
// 2) doctoc: generates TOC, then pipes into...
// 3) destination: same as source (readme.md contents are automatically overwritten/updated)
gulp.task("readmeTOC", () => {
	return gulp.src("readme.md")
		.pipe(doctoc())
		.pipe(gulp.dest(""));
});