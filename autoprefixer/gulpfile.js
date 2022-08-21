var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("style", function (e) {
	return gulp
		.src("css/styles.css")
		.pipe(autoprefixer())
		.pipe(gulp.dest("build"));
});

gulp.task("watch", function name(params) {
	gulp.watch("css/styles.css", gulp.series("style"));
});
