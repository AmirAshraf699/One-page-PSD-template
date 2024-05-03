var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    uglify = require('gulp-uglify');


gulp.task('html', function () {
    return gulp.src('./index.html')
        .pipe(concat('main.html'))
        .pipe(gulp.dest('dist'))
        .pipe(livereload())
})

gulp.task('css-plus', function () {
    return gulp.src(['./css/all.min.css', './css/normalize.css'])
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
})


gulp.task('css', function () {
    return gulp.src('./css/kasper.css')
        .pipe(concat('main.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
})

gulp.task('js', function () {
    return gulp.src('./js/kasper.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
})


gulp.task('watch', function () {
    require('./server.js')
    gulp.watch('./index.html', gulp.series('html'))
    gulp.watch('./css/*.css', gulp.series('css'))
    gulp.watch('./js/kasper.js', gulp.series('js'))
})