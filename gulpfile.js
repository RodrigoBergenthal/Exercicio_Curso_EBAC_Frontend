const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate');

function comprimeImagens() {
  console.log('Iniciando compressão de imagens...');
  return gulp.src('./source/images/*')
    .pipe(imagemin())
    .on('end', () => console.log('Compressão de imagens concluída.'))
    .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
  console.log('Iniciando compressão de JavaScript...');
  return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .on('end', () => console.log('Compressão de JavaScript concluída.'))
    .pipe(gulp.dest('./build/scripts'));
}

function compilaSass() {
  console.log('Iniciando compilação de Sass...');
  return gulp.src('./source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .on('end', () => console.log('Compilação de Sass concluída.'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

// Definindo tarefas
gulp.task('images', comprimeImagens);
gulp.task('javascript', comprimeJavaScript);
gulp.task('sass', compilaSass);

exports.default = function () {
  console.log('Iniciando tarefa padrão...');
  gulp.watch('./source/styles/*.scss', { ignoredInitial: false }, gulp.series(compilaSass));
  gulp.watch('./source/scripts/*.js', { ignoredInitial: false }, gulp.series(comprimeJavaScript));
  gulp.watch('./source/images/*', { ignoredInitial: false }, gulp.series(comprimeImagens));
};
