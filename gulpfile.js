var gulp = require('gulp'),
		sass = require('gulp-sass'),
		neat = require('node-neat').includePaths,
    useref = require('gulp-useref'),
    runSequence = require('run-sequence'),
    modernizr = require('gulp-modernizr');

var paths = {
  scss: './app/scss/*.scss'
};

// Styles (Bourbon, Neat)
gulp.task('styles', function () {
  return gulp.src(paths.scss)
      .pipe(sass({
          includePaths: ['styles'].concat(neat)
      }))
      .pipe(gulp.dest('./dist/assets/css'));
});

// Fonts Dir
gulp.task('fonts', function() {
  return gulp.src('./app/fonts/**/*')
  .pipe(gulp.dest('./dist/assets/fonts'))
});

// JS Dir
gulp.task('js', function() {
  return gulp.src('./app/js/**/*')
  .pipe(gulp.dest('./dist/assets/js'))
});

// Images Dir
gulp.task('images', function() {
  return gulp.src('./app/images/**/*')
  .pipe(gulp.dest('./dist/assets/images'))
});

// Video Dir
gulp.task('video', function() {
  return gulp.src('./app/video/**/*')
  .pipe(gulp.dest('./dist/assets/video'))
});

// Vendor Dir
gulp.task('vendor', function() {
  return gulp.src('./app/vendor/**/*')
  .pipe(gulp.dest('./dist/assets/vendor'))
});

// html
gulp.task('html', function() {
  return gulp.src('app/**/*.html')
  .pipe(gulp.dest('./dist/'))
});

// Useref
gulp.task('useref', function(){
  return gulp.src('app/**/*.html')
    .pipe(useref())
    .pipe(gulp.dest('./dist/assets/js'))
});

gulp.task('modernizr', function() {
  gulp.src('./app/vendor/**/*')
    .pipe(modernizr())
    .pipe(gulp.dest('./dist/assets/js'))
});

// Gulp watch
gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['styles']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/**/*.html', ['html']);
  // Other watchers
})

// Gulp Start
gulp.task('default', function(callback) {
  runSequence('html', 'styles', 'fonts', 'js', 'images', 'video', 'vendor', callback);
});

// Gulp Run Sequence
gulp.task('default', function(callback) {
  runSequence('html', 'styles', 'fonts', 'js', 'images', 'video', 'vendor', callback);
});



