// required modules
const gulp = require("gulp"),
		changed = require("gulp-changed"),
		doctoc = require("gulp-doctoc"),
		marked = require("gulp-marked"),
		inject = require("gulp-inject"),
		prettify = require("gulp-prettify");

// default tasks to run on "gulp" command
gulp.task("default", [
		"documentastic",
		"readmeTOC"
	], () => {
		// files to watch and tasks to run
		gulp.watch("dev/*.md", ["documentastic"]);
		gulp.watch("readme.md", ["readmeTOC"]);
});

// documentastic task
// 1) source is dev/*.md, contains MD files that are piped into changed
// 2) changed monitors public/*.html, only files that have been modified are piped into doctoc
// 3) doctoc generates TOC, then pipes into marked
// 4) marked converts MD to HTML, then pipes into inject (part 1)
// 5) inject (part 1) injects code into top of HTML document at corresponding tag, then pipes into inject (part 2)
// 6) inject (part 2) injects code into bottom of HTML document at corresponding tag, then pipes into prettify
// 7) prettify adds automatic indentation to HTML document, then pipes into destination
// 8) destination is public/*.html, contains compiled HTML files
gulp.task("documentastic", () => {
	return gulp.src("dev/*.md")
		// note: after making a change to one of the injected .html partial files,
		// comment-out "changed" pipe (below), then run the default "gulp" task
		// in order to update all of your files at once
		.pipe(changed("public/", {extension: ".html"}))
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
		.pipe(prettify({
			indent_with_tabs: true,
			indent_size: 3,
			preserve_newlines: true
		}))
		.pipe(gulp.dest("public/"));
});

// readmeTOC task
// 1) source is readme.md, file is piped into doctoc
// 2) doctoc generates TOC, then pipes into destination
// 3) destination is same as source (readme.md contents are automatically overwritten/updated)
gulp.task("readmeTOC", () => {
	return gulp.src("readme.md")
		.pipe(doctoc())
		.pipe(gulp.dest(""));
});