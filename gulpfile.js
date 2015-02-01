'use strict';

var argv = require('minimist')(process.argv.slice(2)),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var BUILD_DIR = './build/',
    DIST_DIR = './dist/',
    IS_RELEASE_BUILD = !!argv.release;

gulp.task('js', function () {
    gulp.src(['app/**/_*.js', 'app/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('css', function () {
    gulp.src(BUILD_DIR + '/scss/*.scss')
        .pipe(concat('style.css'))
        .pipe(sass())
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('watch', ['js', 'css'], function () {
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch(BUILD_DIR + 'scss/*.scss', ['css'])
});