// I - import plugins ---------------------------

// general
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');
// html
const htmlmin = require('gulp-htmlmin');
// scss
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
// js
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
// json
// const jsonminify = require('gulp-jsonminify');

// II - Basic tasks -----------------------------

// copy, minify and paste html files
gulp.task('html', () => {
	return gulp.src('src/*.html')
		.pipe(htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('public'))
		.pipe(browserSync.stream());
});
// bundle, convert to css, minify, rename
// and paste scss files
gulp.task('scss', () => {
	return gulp.src('src/scss/master.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleancss({ compatibility: 'ie8' }))
		.pipe(rename('master.min.css'))
		.pipe(gulp.dest('public/css'))
		.pipe(browserSync.stream());
});
// bundle, convert to es5, add a polyfill,
// minify, rename and paste js files
gulp.task('js', () => {
	return gulp.src('src/js/app.js')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(webpack({
			mode: 'production',
		}))
		.pipe(babel({
			presets: ['@babel/env'],
		}))
		.pipe(rename('app.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/js'))
		.pipe(browserSync.stream());
});
// copy, and paste all assets
gulp.task('assets', () => {
	return gulp.src('src/assets/**/*')
		.pipe(gulp.dest('public/assets'))
		.pipe(browserSync.stream());
});

// III - Advanced tasks -------------------------

// copy, minify and paste json files

// gulp.task('json', () => {
// 	return gulp.src('src/json/*.json')
// 		.pipe(jsonminify())
//         .pipe(gulp.dest('public/json'))
// 		.pipe(browserSync.stream());
// })

// copy, and paste the SEO files
// (.htaccess, sitemap.xml, robots.txt)

// gulp.task('website', () => {
// 	return gulp.src(['website_assets/**/*', 'website_assets/**/.*'])
// 		.pipe(gulp.dest('public'))
// 		.pipe(browserSync.stream());
// });

gulp.task('build', ['html', 'scss', 'js', 'assets']);
// gulp.task('build', ['html', 'scss', 'js', 'json', 'assets', 'website']);

gulp.task('watch', ['build'], () => {
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/scss/**/*.scss', ['scss']);
	gulp.watch('src/js/**/*.js', ['js']);
	gulp.watch('src/assets/**/*', ['assets']);
	// gulp.watch('src/json/**/*.json', ['json']);
	// gulp.watch(['website_assets/**/*', 'website_assets/**/.*'], ['website']);
});

gulp.task('default', ['watch'], () => {
	browserSync.init({
		server: {
			baseDir: './public',
		},
	});
});