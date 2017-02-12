
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourceMaps = require('gulp-sourcemaps');
var autoPreFixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');

var resource = {
    src: {
        js: [
            "app/app.js",
            "app/app.route.js",
            "app/components/**/*.js"
        ],
        scss: [
            "app/assets/scss/**/*.scss"
        ]
    },
    dest: {
        js: "app/assets/js",
        css: "app/assets/css"
    }
};
var sassOptions = {
    errLogToConsole: false,
    outputStyle: 'expanded' // nested, expanded, compact, compressed
};
var autoPreFixerOptions = {
    browsers: ['last 3 versions'],
    cascade: false
};

gulp.task('sass', function () {
    return gulp.src(resource.src.scss)
        .pipe(sourceMaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoPreFixer(autoPreFixerOptions))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(resource.dest.css));
});

gulp.task('scripts', function() {
    gulp.src(resource.src.js)
        .pipe(concat('all.js'))
        // .pipe(uglify('all.min.js', uglifyOptions))
        .pipe(gulp.dest(resource.dest.js))
});

gulp.task('watch', function () {
    gulp.watch([resource.src.scss, resource.src.js], ['sass', 'scripts']);
});
