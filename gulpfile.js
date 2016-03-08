var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');


gulp.task('sass', function(){
	gulp.src('src/main.scss')
		.pipe(sass())
		.pipe(prefix())
		.pipe(gulp.dest('dist/'));
});

gulp.task('copy-assets', function(){
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', ['sass', 'copy-assets']);