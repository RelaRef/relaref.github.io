/*eslint-env node */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
	
	browserSync.init({
    	server: "./"
 	});

	gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
});