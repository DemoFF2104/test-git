var gulp = require('gulp'), // Подключаем Gulp
 sass = require('gulp-sass'); // Подключаем Sass пакет

gulp.task('sass', function (done) {
 gulp.src('sass/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('css'));
  done();
});

gulp.task("watch", function () {
 gulp.watch('sass/*.sass', gulp.parallel('sass'));
});

