// gulpfile.babel.js
// const gulp = require('gulp'); import ~ 와 동일

import gulp       from "gulp";
import corejs     from "core-js";
import mkdir      from "mk-dirs";
import writeFile  from "write";

const url = {
   module: './node_modules/',
   source: './public/source/',
   dist  : './public/assest/',
};


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
export const make = gulp.series(makeDir);

// -------------------------------------------
async function makeFile(){
   writeFile.sync(url.source + 'index.html',`<!DOCTYPE html>\n<html lang="en">\n<head>\n   <meta charset="UTF-8">\n   <title>Document</title>\n   <script>\n   window.location = "./html/main.html";\n   </script>\n</head>\n<body>\n</body>\n</html>`);
   writeFile.sync(url.source + 'html/main.html');
   writeFile.sync(url.source + 'scss/base/reset.scss');
   writeFile.sync(url.source + 'scss/base/common.scss');
};
export const mkfile = gulp.series(makeFile);

const first = gulp.series(makeDir, gulp.parallel(makeFile));
export default first;