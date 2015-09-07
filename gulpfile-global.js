var gulp = require('gulp');
var argv = process.argv.slice(1);

gulp.task('zip', function () {
    return gulp.src('src/*')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('dist'));
});