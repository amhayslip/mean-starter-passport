var gulp = require('gulp');
var server = require('gulp-express');
var install = require("gulp-install");
 
gulp.task('server', function () {
  // Start the server at the beginning of the task 
  server.run(['app.js']);
});

gulp.task('install', function () {
  gulp.src([, './package.json'])
  .pipe(install());
});

gulp.task('default', ['install', 'server']);