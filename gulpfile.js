var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var minify = require('gulp-minify');

gulp.task('default', ['imagemin', 'browserSync', 'minify-css','compress'], function() {
  // place code for your default task here
  gulp.watch('src/styles/*.css', function() {
      // run styles upon changes
      gulp.start('minify-css');
   });
   gulp.watch(["src/**/*.*"]).on('change', browserSync.reload);
});

gulp.task('imagemin', function() {
   var img_src = 'src/images/**/*', img_dest = 'build/images';

   gulp.src(img_src)
   .pipe(imagemin())
   .pipe(gulp.dest(img_dest))
   .pipe(browserSync.reload({
      stream: true
   }))
});

gulp.task('minify-css', function() {
  return gulp.src('src/styles/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/styles/'));
});

gulp.task('browserSync', function() {
   browserSync.init({
		proxy: {
			target: "http://localhost:8080/samples/gulp/src/", // can be [virtual host, sub-directory, localhost with port]
			ws: true // enables websockets
		}
   })
});

gulp.task('compress', function() {
  gulp.src('src/scripts/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        }
    }))
    .pipe(gulp.dest('build'))
});
