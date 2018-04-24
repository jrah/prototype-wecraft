const postcss = require('gulp-postcss');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('autoprefixer');
const purgecss = require('postcss-purgecss');
const clean = require('postcss-clean');

gulp.task('css', () => {
  const plugins = [
    autoprefixer({ browsers: ['last 2 version'] }),
    purgecss({
      content: ['_site/**/*.html'],
      css: ['_site/assets/main.css'],
    }),
    clean(),
  ];
  return gulp.src('_site/assets/main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('_site/assets/'));
});


gulp.task('images', () => {
  gulp.src('assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('_site/assets/images'));
});

gulp.task('build', () => {
  gulp.run('css', 'images');
});
