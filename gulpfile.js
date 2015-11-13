var gulp       = require('gulp');
var sass       = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat     = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('default', function() {

});

gulp.task('sass', function () {
  return sass('assets/scss/*.scss', {sourcemap: true})
    .on('error', sass.logError)
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('assets/scss/*.scss', ['sass']);
});
