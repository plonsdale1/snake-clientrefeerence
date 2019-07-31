// const  { IP, PORT }  = require('./constants');

const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.218',
    port: 50541
  });
  // interpret incoming data as text
  
  conn.setEncoding('utf8'); 
  conn.on('data', data => {
    console.log('i am here!!!')
    console.log(data);
    conn.write("Name: PDL");
    // conn.write("Move: up");
  })

  return conn;
}


module.exports = connect;
// \u003

// Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)