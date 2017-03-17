var gulp = require('gulp');
var concat = require('gulp-concat');                            //- 多个文件合并为一个；
var minifyCss = require('gulp-minify-css');                     //- 压缩CSS为一行；
var clean = require('gulp-clean');
var revCollector = require('gulp-rev-collector');               //- 路径替换

gulp.task('clean',function(){
    return gulp.src('./dist')
        .pipe(clean())
})

gulp.task('concat', function() {                                //- 创建一个名为 concat 的 task
    gulp.src(['./source/gitbook/**/*.css'])    // - 需要处理的css文件，放到一个字符串数组里
        .pipe(concat('main.min.css'))                            //- 合并后的文件名
        .pipe(minifyCss())                                   //- 压缩处理成一行
        .pipe(gulp.dest('./dest/css'))                               //- 输出文件本地
});

gulp.task('concat1',function(){
    gulp.src(['./source/gitbook/**/*.js'])
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('./dest/js'));
});

gulp.task('move',function(){
    gulp.src(['./source/*.html','./source/search_index.json'])
        .pipe(gulp.dest('./dest/'))
    gulp.src(['./source/assets/**'])
        .pipe(gulp.dest('./dest/assets'));
})


gulp.task('default', ['clean','concat','concat1','move']);