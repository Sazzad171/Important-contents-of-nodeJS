const fs = require('fs');
const path = require('path');


// // create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if(err) throw err;
//   console.log('Folder created...');
// });


// // create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello world!\n',
//   err => {
//   if(err) throw err;
//   console.log('Folder written to...');


//   // file append (write twice in a file)
//   fs.appendFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'I love nodejs!',
//     err => {
//     if(err) throw err;
//     console.log('Folder written to...');
//     }
//   );
//   }
// );


// // read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if(err) throw err;
//     console.log(data);
//   });


// rename file 
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
  if (err) throw err;
  console.log('File renamed...');
});