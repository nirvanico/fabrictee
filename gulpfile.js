   //gulpfile.js
   var gulp = require('gulp');
   var concat = require('gulp-concat');
   var minifyCSS = require('gulp-minify-css');
   var uglify = require('gulp-uglify');
   var autoprefixer = require('gulp-autoprefixer');
   var rename = require('gulp-rename');
   var gutil = require('gulp-util');

   //css stuff, concat+minify
   gulp.task('css', function () {
       gulp.src('src/css/**/*.css')
           .pipe(minifyCSS())
           .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
           .pipe(concat('style.min.css'))
           .pipe(gulp.dest('css'))
   });

   //script paths

   gulp.task('scripts', function () {
       gulp.src('src/js/**/*.js')
           .pipe(concat('scripts.js'))
           .pipe(gulp.dest('js'))
           .pipe(rename('scripts.min.js'))
           .pipe(uglify())
           .on('error', function (err) {
               gutil.log(gutil.colors.red('[Error]'), err.toString());
           })
           .pipe(gulp.dest('js'));
   });
