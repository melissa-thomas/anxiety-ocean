var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('css/'));
});

// task that gets gulp to watch continuously for sass changes
gulp.task('watch', function() {
	gulp.watch('scss/*.scss', ['sass']);
});


// default task so I can just type "gulp"
gulp.task('default', ['sass', 'watch']);