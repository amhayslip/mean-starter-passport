var gulp = require('gulp');
var server = require('gulp-express');
var install = require("gulp-install");
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
 
gulp.task('server', function () {
  // Start the server at the beginning of the task 
  server.run(['app.js']);
});

gulp.task('install', function () {
  gulp.src([, './package.json'])
  .pipe(install());
});

gulp.task('default', ['install', 'server', 'sass:watch']);