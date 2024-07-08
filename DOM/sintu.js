const path =require('path');

// console.log(path.sep); /*  \(for window)  /(mac,linux)    */

// console.log(process.env.path);  /*  ;(window)  :(mac,linux)  */

// console.log(path.delimiter);

const filepath1 = '/public_html/home/index.html';

const currentfilepath = __filename;
console.log('currentfilepath > ',currentfilepath);
// cone.lsolog(__dirname)

let result = path.basename(currentfilepath);
console.log(result);
let basename = path.basename(currentfilepath);
console.log('basename>',basename);

let basenamewithoutExt = path.basename(currentfilepath,'.js');
console.log('basenamewithoutExt>',basenamewithoutExt);

let dirname=path.dirname(currentfilepath);
console.log('dirname>',dirname);

console.log('ext1>', path.extname(currentfilepath));
console.log('ext2>',path.extname('index.md.js'))

// let pathTofile=path.formate({
//     dir:'/public_html/home',
//     base:'index.html'
// })

// console.log('pathTofile>',pathTofile);
console.log('Isabsolute',path.isAbsolute(currentfilepath));

console.log('Isabsolute',path.isAbsolute('/index.js'));

console.log('Isabsolute',path.isAbsolute('./index.js'));

console.log('Isabsolute',path.isAbsolute('../index.js'));

let pathToDir=path.join('/home','js','dist','index.js');
console.log('pathToDir >',pathToDir);

