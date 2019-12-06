// 모듈 불러오기 (package.json 에서 불러오는 방식)
// import 임의의이름 from "설치된모듈명"
import gulp from "gulp";
import gulpScss from "gulp-sass";
import gulpSync from "browser-sync";
   const gulpBrowser = gulpSync.create();
import gulpCached from "gulp-cached";
import gulpWatch from "gulp-watch";

// ----------------------------------------------
// 영역, 위치, 파일 변수 작성
const url = {
   before: "./public/source/"
};


// 기능(function) 작성
// scss기능 작성
const scssOption = {
   outputStyle:'compact',
   indentType:'space',
   indentWidth:'2',
   percision:'6',
   sourceComment:false
}

// Function files
async function FnScss(){
   gulp.src(url.before + 'scss/**/*.scss')
       .pipe(gulpCached('cssFiles'))
       .pipe(gulpCached('scssFiles'))
       .pipe(gulpScss(scssOption).on('error',gulpScss.logError))
       .pipe(gulp.dest(url.before + 'css/'))
       .pipe(gulpBrowser.reload({ stream: true }));
};

function FnCss(){
   gulp.src(url.before + 'css/**/*.css')
       .pipe(gulpCached('cssFiles'))
       .pipe(gulpBrowser.reload({stream:true}));
}


function FnHtml(){
   gulp.src(url.before + '**/*.html')
       .pipe(gulpCached('htmlFiles'))
       .pipe(gulpBrowser.reload({ stream: true }));
}

function FnJs(){
   gulp.src(url.before+'js/**/*.js')
       .pipe(gulpCached('jsFiles'))
       .pipe(gulpBrowser.reload({stream:true}));
}


// browser-sync 서버 구동 기능지정
function FnSync() {
   gulpBrowser.init({
      server: {
         //기본폴더
         baseDir: url.before
      }
   })
}

// 실시간 감지
function FnWatch(){
   gulpWatch(url.before + 'scss/**/*.scss',FnScss);
   gulpWatch(url.before + 'css/**/*.css',FnCss);
   gulpWatch(url.before + '**/*.html',FnHtml);
   gulpWatch(url.before + 'js/**/*.js',FnJs);
}


// -----------------------------------------------
// 기능 외부에서 사용하기 위해 내보내기
// scss
export const scss = FnScss; //gulp scss

//browsersync
export const server = FnSync; //gulp seerver


// default값 설정
const myWeb = gulp.series(FnScss,gulp.parallel(FnSync,FnWatch));

export default myWeb;