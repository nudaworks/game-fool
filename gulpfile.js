'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const rename = require('gulp-rename');

gulp.task('sass', () => {
    gulp.src('./client/sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./client/css'));
});

gulp.task('default', () => {
   gulp.watch('./client/sass/*.sass', ['sass']);
});