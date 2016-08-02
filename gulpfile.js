// required npm modules
var gulp = require("gulp");
// documentation modules
var doctoc = require("gulp-doctoc");
var marked = require("gulp-marked");

// default tasks to run on "gulp" command
gulp.task("default", ["docTasks", "readmeTOC"], function() {
	// files to watch and tasks to run
	gulp.watch("dev/*.md", ["docTasks"]);
	gulp.watch("readme.md", ["readmeTOC"]);
});

// docTasks
// 1) pipes all MD into doctoc
// 2) doctoc generates TOC, then pipes into marked
// 3) marked converts MD to HTML, then pipes into destination
gulp.task("docTasks", function() {
	return gulp.src("dev/*.md")
		.pipe(doctoc())
		.pipe(marked())
		.pipe(gulp.dest("public/"));
});

// readmeTOC
// 1) pipes readme.md into doctoc
// 2) doctoc generates TOC, then pipes into destination
gulp.task("readmeTOC", function() {
	return gulp.src("readme.md")
		.pipe(doctoc())
		.pipe(gulp.dest(""));
});