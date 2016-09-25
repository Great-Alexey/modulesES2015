const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('es6', () =>
{
	browserify( 'scripts/index.js' )
		.transform( 'babelify', {
			presets: ['es2015']
		}
	)
	.bundle()
	.pipe( source( 'main.js' ) )
	.pipe( buffer() )
	.pipe( sourcemaps.init( {loadMaps: true} ) )
	// .on( 'error', gulpUtil.log )
	.pipe( sourcemaps.write( './' ) )
	.pipe( gulp.dest( 'scripts/' ) );
});

gulp.task( 'default', ['es6'],
	() =>
	{
		gulp.watch('scripts/**/*.js',['es6'] )
	}
);
