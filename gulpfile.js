let gulp = require( 'gulp' )
let sass = require( 'gulp-sass' )
let browserSync = require( 'browser-sync' ).create()

gulp.task( 'sass', () => {
    return gulp.src( 'css/scss/*.scss' )
        .pipe( sass() ) // Converts Sass to CSS with gulp-sass
        .pipe( gulp.dest( 'css' ) )
        .pipe( browserSync.reload({
            stream: true
        }) )
})

gulp.task( 'browserSync', () => {
    browserSync.init({
        server: {
          baseDir: './'
        },
    })
})

gulp.task( 'watch', [ 'browserSync', 'sass' ], () => {
    gulp.watch( 'css/scss/*.scss', ['sass'] )
    gulp.watch( '*.html', browserSync.reload )
    gulp.watch( 'html/*.html', browserSync.reload )
})

gulp.task( 'default', [ 'sass'] )