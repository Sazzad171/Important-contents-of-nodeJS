// console.log('Hello from nodejs')


// // call data from another file
// const person = require('./person');
// console.log(person.age);


// // call data from another file-2
// const Person = require('./person');
// const person1 = new Person('Sazzad', 22);
// person1.greetng();


// // check file-directory name
// console.log(__dirname, __filename);


// // nodejs event
// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener', data));

// logger.log('Hello world');
// logger.log('Welcom nodejs');


// // make a server & load some file
// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const server = http.createServer((req, res) => {

//   if(req.url === '/'){
//     fs.readFile(
//       path.join(__dirname, 'public', 'index.html'),
//       (err, content) => {
//         if(err) throw err;
//         res.writeHead(200, { 'Content-type': 'text/html' });
//         res.end(content);
//       }
//     )
//   }

//   if(req.url === '/about'){
//     fs.readFile(
//       path.join(__dirname, 'public', 'about.html'),
//       (err, content) => {
//         if(err) throw err;
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(content);
//       }
//     )
//   }

//   // for api uses
//   if(req.url === '/api/users') {
//     const users = [
//       { name: 'Sazzad', age: 22 },
//       { name: 'Jafor', age: 52 }
//     ];
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(users));
//   }

// });

// const PORT = process.env.PORT || 5000;

// server.listen(
//   PORT, () => console.log(`Server running on port ${PORT}`)
// );


// make a server & make dynamic file path
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

  // build file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // extension of file
  let extname = path.extname(filePath);

  // initial content type
  let contentType = 'text/html';

  // check extension and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // read file
  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code === 'ENOENT') {
        // page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf8');
        })
      }
      else {
        // some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    }
    else {
      // success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  })

});

const PORT = process.env.PORT || 5000;

server.listen(
  PORT, () => console.log(`Server running on port ${PORT}`)
);