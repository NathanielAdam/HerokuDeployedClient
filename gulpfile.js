var gulp = require('gulp')
var gulp = require('gulp-concat')
var gulp = require('gulp-uglify')

var javascriptFiles = [
    './app.js',
    './workouts/define.js',
    './workouts/log.js',
    './user/auth.js'
];

gulp.task('bundle', function() {
    return gulp.src(javascriptFiles)
        .pipe(concat('bundle.js')) //squish all files together into one file
        .pipe(uglify())
        .pipe(gulp.dest("./dist")); //Save the bundle.js
});

gulp.task('default', ['bundle']);