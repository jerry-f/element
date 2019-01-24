'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

gulp.task('compile', function() {
  return gulp.src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    return gulp.src('./src/*.scss')
      .pipe(sass.sync({
        outputStyle: 'expanded' // nested/expanded/compact/compressed
      }).on('error', sass.logError))
      // .pipe(autoprefixer({
      //   browsers: ['ie > 9', 'last 2 versions'],
      //   cascade: false
      // }))
      // .pipe(cssmin())
      .pipe(gulp.dest('./lib'));
    // return gulp.src(event.path)
    //   .pipe(sass.sync({
    //     outputStyle: 'expanded' // nested/expanded/compact/compressed
    //   }).on('error', sass.logError))
    //   .pipe(autoprefixer({
    //     browsers: ['ie > 9', 'last 2 versions'],
    //     cascade: false
    //   }))
    //   // .pipe(cssmin())
    //   .pipe(gulp.dest('./lib'));
  });
});

gulp.task('copyfont', function() {
  return gulp.src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'));
});

gulp.task('build', ['compile', 'copyfont']);
