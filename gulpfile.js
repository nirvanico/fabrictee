/*

    Before using make sure you have:
    npm install --save-dev gulp gulp-minify-css gulp-concat gulp-uglify gulp-autoprefixer gulp-sass

    Make sure to change the directory names in the default watch function to the CSS/SCSS/SASS directories you are using so it reloads
 */
var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify')
    prefix = require('gulp-autoprefixer')
    sass = require('gulp-sass');

// Minifies JS
gulp.task('js', function(){
    return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('/js'))
});

/*==========  Minify and concat different styles files  ==========*/

// SASS Version
//gulp.task('styles', function(){
    //return gulp.src('src/sass/**/*.sass')
    //.pipe(sass())
    //.pipe(prefix('last 2 versions'))
    //.pipe(concat('main.css'))
    //.pipe(minifyCSS())
    //.pipe(gulp.dest('public/css'))
//});

// SCSS Version
//gulp.task('styles', function(){
    //return gulp.src('src/scss/**/*.scss')
    //.pipe(sass())
    //.pipe(prefix('last 2 versions'))
    //.pipe(concat('main.css'))
    //.pipe(minifyCSS())
    //.pipe(gulp.dest('public/css'))
//});


 // CSS Version

gulp.task('styles', function(){
    return gulp.src('src/css/*.css')
    .pipe(concat('site.css'))
    .pipe(minifyCSS())
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('/css'))
});

gulp.task('default', function() {
    gulp.run('styles')
    gulp.run('js')
    gulp.watch('src/sass/**/*.sass', function(){
        gulp.run('styles')
    })
});
