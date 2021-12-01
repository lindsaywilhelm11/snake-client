const net = require("net");
// establishes a connection with the game server
const connect = function () {
    const conn = net.createConnection({
      host: '10.0.2.15',
      port: '50541'
    });
  
    conn.on('data', (data) => {
      console.log('Server says:', data)
    }); 

    conn.on('connect', (client) => {
        console.log('Successfully connected to game server \n')
        conn.write('Name: LNW')

        // setTimeout(() => {
        //     conn.write('Move: up')
        // }, 50)
    })
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    return conn;
  };

  module.exports = connect,  'Name: SNK' ;
