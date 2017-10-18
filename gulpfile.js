// Gulp Addons
let gulp = require("gulp"),
    clean = require('gulp-clean')
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    uglifycss = require('gulp-uglifycss'),
    gutil = require('gulp-util'),
    remoteSrc = require('gulp-remote-src')
;


/* =============================================================================
    Obliterate assets/dist folder.
============================================================================= */
gulp.task("clean", function() {
    return gulp.src("./other/aws-s3/dist/", {read: false})
        .pipe(clean())
    ;
});


/* =============================================================================
    CSS Files
============================================================================= */
gulp.task("styles-local", function() {
    return gulp.src([
        "./other/assets/styles/site.css"
    ])
    .pipe(concat("styles.local.min.css"))
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
    })) // uglifycss
    .pipe(gulp.dest("./other/aws-s3/dist/"))
}); // return gulp.task()

gulp.task("styles-remote", function() {
    remoteSrc(
        [
            ""
        ], { base: null }
    )
    .pipe(concat("styles.external.min.css"))
    .pipe(uglifycss({
        "maxLineLen": 80,
        "uglyComments": true
    })) // uglifycss
    .pipe(gulp.dest("./other/aws-s3/dist/"))
;});


/* =============================================================================
    JavaScript files placed at the end of the document so the pages load faster
============================================================================= */
gulp.task("scripts-remote", function() {
    remoteSrc(
        [
            // "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js",
            "https://code.jquery.com/jquery-3.2.1.js",
            "https://cdnjs.cloudflare.com/ajax/libs/jquery.cycle2/2.1.6/jquery.cycle2.min.js",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/js/fastclick.js",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/js/navigation.js",
            "https://d1xrp9zhb3ks3c.cloudfront.net/web/tmjsleeptherapycentre/js/mobnavigation.js"
        ], { base: null }
    )
    .pipe(concat("scripts.external.min.js"))
    .pipe(uglify().on("error", gutil.log))
    .pipe(gulp.dest("./other/aws-s3/dist/"))
;});

gulp.task("scripts-local", function() {
    return gulp.src([
        "./other/assets/js/snapengage.js",
        "./other/assets/js/leemtek.js"
    ])
    .pipe(concat("scripts.local.min.js"))
    .pipe(uglify().on("error", gutil.log))
    .pipe(gulp.dest("./other/aws-s3/dist/"))
;});


/* =============================================================================
    Update S3 Assets
============================================================================= */
// Disabled since this a public repository.  Copy output to S3.


/* =============================================================================
    Start Tasks
============================================================================= */
gulp.task('default', ["clean"], function() {
    gulp.start("styles-local", "scripts-local", "scripts-remote");
});
