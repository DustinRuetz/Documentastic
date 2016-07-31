// required npm modules
var gulp = require("gulp");
// documentation modules
var doctoc = require("gulp-doctoc");
var marked = require("gulp-marked");

// default tasks to run on "gulp" command
gulp.task("default", [
	"docTasks",
	"styleTasks",
	"scriptTasks"
], function() {
	// files to watch and tasks to run
	gulp.watch("dev/*.md", ["docTasks"]);
	gulp.watch("dev/*.css", ["styleTasks"]);
	gulp.watch("dev/*.js", ["scriptTasks"]);
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

// styleTasks
// 1) pipes all CSS into destination
gulp.task("styleTasks", function() {
	return gulp.src("dev/*.css")
		.pipe(gulp.dest("public/"));
});

// scriptTasks
// 1) pipes all JS into destination
gulp.task("scriptTasks", function() {
	return gulp.src("dev/*.js")
		.pipe(gulp.dest("public/"));
});