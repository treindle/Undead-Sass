var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass( {errlogToConsole: true } ))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch_sass', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch_sass', 'sass']);