const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Caminhos dos arquivos
const paths = {
    sass: './src/sass/**/*.scss',
    js: './src/js/**/*.js',
    images: './src/images/**/*',
};

// Compilar SASS com sourcemaps
function compilarSass() {
    return gulp.src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/css'));
}

// Minificar JS
function minificarJS() {
    return gulp.src(paths.js)
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

// Otimizar imagens
function otimizarImagens() {
    return gulp.src(paths.images)
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Assistir alterações
function watchFiles() {
    gulp.watch(paths.sass, compilarSass);
    gulp.watch(paths.js, minificarJS);
    gulp.watch(paths.images, otimizarImagens);
}

// Definir tarefas
exports.default = gulp.series(
    gulp.parallel(compilarSass, minificarJS, otimizarImagens),
    watchFiles
);
