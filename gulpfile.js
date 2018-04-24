const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const purgecss = require('postcss-purgecss');

gulp.task('build', () => {
  const plugins = [
    autoprefixer({ browsers: ['last 2 version'] }),
    purgecss({
      content: ['_site/**/*.html'],
      css: ['_site/assets/main.css'],
    }),
  ];
  return gulp.src('_site/assets/main.css')
    .pipe(postcss(plugins))
    .pipe(gulp.dest('_site/assets/'));
});