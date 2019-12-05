// gulpfile.babel.js
// const gulp = require('gulp'); import ~ 와 동일


// -------------------------------------------
// 모듈 불러오기
import gulp       from "gulp";
import corejs     from "core-js";   //
import mkdir      from "mk-dirs";   // 폴더 생성
import writeFile  from "write";     // 
import scss       from "gulp-sass"; //scss 사용


// -------------------------------------------
//기본 폴더위치 설정
const url = {
   module: './node_modules/',
   source: './public/source/',
   dest  : './public/assest/'
};


// -------------------------------------------
// 폴더 생성
async function makeDir(){
   Promise.all([
      mkdir('public'),
      mkdir(url.source),
      mkdir(url.source + 'html'),
      mkdir(url.source + 'scss'),
      mkdir(url.source + 'scss/src'),
      mkdir(url.source + 'scss/base'),
      mkdir(url.source + 'img'),
      mkdir(url.source + 'js'),
      mkdir(url.source + 'js/base'),
      mkdir(url.source + 'js/src'),
      mkdir(url.source + 'ie'),
      mkdir(url.source + 'media'),
      mkdir(url.source + 'media/audio'),
      mkdir(url.source + 'media/video'),
      mkdir(url.source + 'fonts')
   ])
};


// -------------------------------------------
// 파일 생성
async function makeFile(){
   writeFile.sync(url.source + 'index.html',`<!DOCTYPE html>\n<html lang="en">\n<head>\n   <meta charset="UTF-8">\n   <title>Document</title>\n   <script>\n   window.location = "./html/main.html";\n   </script>\n</head>\n<body>\n</body>\n</html>`);
   // writeFile.sync(url.source + 'html/main.html');
   // writeFile.sync(url.source + 'scss/base/reset.scss');
   // writeFile.sync(url.source + 'scss/base/common.scss');
};


// -------------------------------------------
// scss 기능수행
// 1. scss 옵션설정
const scssOption = {
   // 컴파일 방법 : expanded, nested, compact, compressed
   outputStyle:'compact',

   // 들여쓰기 방법 : tab, space
   indentType:'space',

   // 들여쓰기 간격
   indentWidth:2,

   // 소수점 계산시 몇자리까지 계산
   percision:6,

   // 컴파일시 주석처리 유무(scss의 파일 위치를 주석으로 처리하여 기록할지에 대한 유무)
   sourceComments:false

};


async function convertCss(){
   gulp.src(url.source+'scss/**/*.scss')
      .pipe( scss(scssOption).on('error',scss.logError) )  // scss모듈 불러와서 옵션 적용(error메시지 확인)
      .pipe( gulp.dest(url.source+'css/') )                    // 컴파일 파일 경로 지정
};                                                         // node-sass --output-style compact scss --output css
                                                           // scss              option             경로 위치

function watch(){
   gulp.watch(url.source+'scss/**/*.scss',convertCss); // 실시간 감지 기능 적용 --watch
};


// --------------------------------------------
// export
// 걸프 외부에서 실행 명령어
export const make = gulp.series(makeDir);
export const mkfile = gulp.series(makeFile);
const first = gulp.series(makeDir, gulp.parallel(makeFile));

export const conScss = gulp.series(watch);

export default first;