const gulp = require('gulp');
const html2pug = require('gulp-html2pug');
 

 var concat = require('gulp-concat');
 var uglify = require('gulp-uglify');
//var gulpCopy = require('gulp-copy');
//var cssnano = require('gulp-cssnano');

//livereload = require('gulp-livereload');

var pump = require('pump');

gulp.task('vendor', function() {
    return gulp.src([
        'bower_components/angular/angular.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/fingerprintjs2/fingerprint2.js'
        ])
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./dev/'));
  });

  gulp.task('uglify', function (cb) {
    pump([
          gulp.src('dev/vendor.js'),
          uglify(),
          gulp.dest('./public/js/')
      ],
      cb
    );
  });


gulp.task('pug', function() {
  // Backend locales
  var op ={"indent_size": 4, "html": {"end_with_newline": true, "js": {"indent_size": 2 }, "css": {"indent_size": 2 } }, "css": {"indent_size": 1 }, "js": {"preserve-newlines": true } }; 
  return gulp.src(['dev/*.html'])
  .pipe(html2pug(op))
  .pipe(gulp.dest('./application/views/'));
});

gulp.task('default', [ 'pug','vendor','uglify']);