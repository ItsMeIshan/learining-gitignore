const path = require('path');
// console.log(path.sep);
const pathname = path.join('content','subfolder','textfile.txt');
console.log(pathname);
const absolutePath = path.resolve(__dirname,'content','subfolder','textfile.txt');
console.log(absolutePath)
console.log(path.basename(absolutePath));