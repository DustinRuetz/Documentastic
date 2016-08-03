// required npm modules
const gulp = require("gulp"),
		doctoc = require("gulp-doctoc"),
		inject = require("gulp-inject"),
		marked = require("gulp-marked");

// default tasks to run on "gulp" command
gulp.task("default", ["docTasks", "readmeTOC"], () => {
	// files to watch and tasks to run
	gulp.watch("dev/*.md", ["docTasks"]);
	gulp.watch("readme.md", ["readmeTOC"]);
});

// docTasks
// 1) pipes all MD into doctoc
// 2) doctoc generates TOC, then pipes into marked
// 3) marked converts MD to HTML, then pipes into destination
gulp.task("docTasks", () => {
	return gulp.src("dev/*.md")
		.pipe(doctoc())
		.pipe(marked())
		.pipe(gulp.dest("public/"));
});

// readmeTOC
// 1) pipes readme.md into doctoc
// 2) doctoc generates TOC, then pipes into destination
gulp.task("readmeTOC", () => {
	return gulp.src("readme.md")
		.pipe(doctoc())
		.pipe(gulp.dest(""));
});