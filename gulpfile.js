'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var react = require('gulp-react');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var config = {
	distPath: './dist/',
	distName: 'fu-loading',
	srcPath: './src/',
	testPath: './test/'
};

// jsx
gulp.task('jsx', function() {
  return gulp.src(config.srcPath + 'jsx/*.jsx')
		.pipe(babel())
    .pipe(jshint())
    .pipe(react())
		.pipe(concat(config.distName + '.js'))
    .pipe(gulp.dest(config.distPath));
});

// Sass
gulp.task('sass', function() {
  return gulp.src(config.srcPath + 'scss/*.scss')
    .pipe(sass())
		.pipe(autoprefixer())
		.pipe(concat(config.distName + '.css'))
    .pipe(gulp.dest(config.distPath));
});

// watch
gulp.task('watch', function() {
  return gulp.watch('./src/*/*', ['jsx', 'sass']);
});

// default task
gulp.task('default', ['jsx', 'sass', 'watch']);
