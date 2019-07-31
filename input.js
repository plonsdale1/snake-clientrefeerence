let connection;
 


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', function(data){handleUserInput(data, conn)})
  // stdin.on('data', handleUserInput);
  return stdin;
}



const handleUserInput = function(key, conn) {
  conn.write("Say: WRYY");
  console.log(key);
  switch(key) {
    case '\u0003':
       return process.exit();
    case 'w':
      conn.write("Move: up");
      break;
    case 'a':
       conn.write("Move: left");
       break;
    case 's':
       conn.write("Move: down");
       break;
    case 'd':
       conn.write("Move: right")  
       break;
  }  
  } 
  

module.exports = setupInput;
