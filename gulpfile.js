var gulp = require('gulp');
var server = require('gulp-express');
 
gulp.task('server', function () {
  // Start the server at the beginning of the task 
  server.run(['app.js']);
});

gulp.task('default', ['server']);