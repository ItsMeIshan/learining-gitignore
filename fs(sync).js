const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log(first);

//writing a file (if the file is present then it will ovverwrite the content provided)
//else if the file with that name isnt present then the file will be created with that name!!

writeFileSync('./content/writefile.txt', 'hey this is written by writeFileSync()',{flag: 'a'});
