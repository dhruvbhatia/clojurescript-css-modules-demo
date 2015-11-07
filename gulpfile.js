var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('css-modules', function () {

    return browserify({
        debug: true,
        standalone: 'cssModules'
    })

        .transform("babelify", {presets: ["es2015"]})
        .require('./src/clojurescript_css_modules_demo/css/settings.js', {entry: true})
        .plugin('css-modulesify', {
            o: './resources/public/css/style.css',
            rootDir: './src/clojurescript_css_modules_demo/css',
            use: [
                'postcss-import',
                'cssnext',
                'postcss-modules-extract-imports',
                'postcss-modules-local-by-default',
                'postcss-modules-scope',
            ],
            'cssnext': {
                compress: false,
            },
            'postcss-import': {
                'path': __dirname + '/src/clojurescript_css_modules_demo/css'
            }
            //jsonOutput: './resources/public/css/app.json', // generating a json file and using that to generate css class names could also be an option
        })
        .bundle()
        .on("error", function (err) {
            console.log("Error : " + err.message);
        })
        .pipe(source('foreign-lib.js'))
        .pipe(gulp.dest('./resources/public/css'));

});

gulp.task("watch", function () {
    // calls "css-modules" whenever anything changes
    gulp.watch("src/clojurescript_css_modules_demo/css/*.*", ["css-modules"]);
});