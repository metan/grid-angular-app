var gulp 		= require('gulp');
var sass        = require('gulp-sass');
var source      = require('vinyl-source-stream');
var browserify  = require('browserify');
var browserSync = require('browser-sync').create();

gulp.task('browserify', function() {
    return browserify('./src/app.js')
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', function () {
  return gulp.src('./src/style/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch('./src/**/*.js', ['browserify']);
	gulp.watch('./src/style/scss/**/*.scss', ['styles']);
	gulp.watch("./index.html").on("change", browserSync.reload);
});