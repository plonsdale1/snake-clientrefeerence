const connect = require('./client');
const setupInput = require('./input');

console.log('Connecting ...');
const conn = connect();

setupInput(conn);







// // const net = require('net');
// const connect = require('./client');



// const setupInput = function(callback) {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.resume();
//   stdin.on('data', function(data){callback(data)})
//   return stdin;
// }

// const handleUserInput = function(data) {
//   if(data === '/u0003') {
//   } return process.exit();
// }

// console.log('Connecting ...');
// connect(setupInput(handleUserInput));