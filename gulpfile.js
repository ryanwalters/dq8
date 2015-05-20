'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

var APP_DIR = './app',
    BUILD_DIR = './build',
    DIST_DIR = './dist';

gulp.task('js', function () {
    gulp.src([APP_DIR + '/**/_*.js', APP_DIR + '/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('lint', function () {
    return gulp.src([APP_DIR + '/**/*.js', './*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('css', function () {
    gulp.src(BUILD_DIR + '/scss/*.scss')
        .pipe(concat('style.css'))
        .pipe(sass())
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('images', function () {
    gulp.src(BUILD_DIR + '/media/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest(DIST_DIR + '/media/images'));
});

gulp.task('watch', ['js', 'css'], function () {
    gulp.watch(APP_DIR + '/**/*.js', ['js']);
    gulp.watch(BUILD_DIR + '/scss/*.scss', ['css']);
});