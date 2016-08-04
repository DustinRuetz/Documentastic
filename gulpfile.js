// required npm modules
const gulp = require("gulp"),
		doctoc = require("gulp-doctoc"),
		marked = require("gulp-marked"),
		inject = require("gulp-inject"),
		prettify = require("gulp-prettify");

// default tasks to run on "gulp" command
gulp.task("default", [
		"mdTasks",
		"htmlTasks",
		"readmeTOC"
	], () => {
		// files to watch and tasks to run
		gulp.watch("dev/*.md", ["mdTasks", "htmlTasks"]);
		gulp.watch("readme.md", ["readmeTOC"]);
});

// mdTasks
// 1) pipes all MD into doctoc
// 2) doctoc generates TOC, then pipes into marked
// 3) marked converts MD to HTML, then pipes into destination
gulp.task("mdTasks", (callback) => {
	return gulp.src("dev/*.md")
		.pipe(doctoc())
		.pipe(marked())
		.pipe(gulp.dest("public/"));
	callback(err);
});

// htmlTasks
// task is dependent on mdTasks, it runs only after mdTasks has finished
// 1) pipes all HTML into inject
// 2) injects the contents of p1-top.html into HTML file at corresponding tag
// 3) injects the contents of p2-bottom.html into HTML file at corresponding tag
// 4) pipes into prettify for automatic HTML indentation
// 5) completed file is piped into destination
gulp.task("htmlTasks", ["mdTasks"], () => {
	return gulp.src("public/*.html")
		.pipe(inject(gulp.src(["public/partials/p1-top.html"]), {
			starttag: "<!-- inject:p1-top:{{ext}} -->",
			transform: (filePath, file) => {
				// return file contents as string 
				return file.contents.toString("utf8")
			}
		}))
		.pipe(inject(gulp.src(["public/partials/p2-bottom.html"]), {
			starttag: "<!-- inject:p2-bottom:{{ext}} -->",
			transform: (filePath, file) => {
				// return file contents as string 
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

// readmeTOC
// 1) pipes readme.md into doctoc
// 2) doctoc generates TOC, then pipes into destination
gulp.task("readmeTOC", () => {
	return gulp.src("readme.md")
		.pipe(doctoc())
		.pipe(gulp.dest(""));
});