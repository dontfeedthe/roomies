var gulp       = require('gulp');
var sass       = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat     = require('gulp-concat');

gulp.task('default', function() {

});

gulp.task('sass', function () {
  return sass('assets/scss/*.scss', {sourcemap: true})
    .on('error', sass.logError)
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
});
