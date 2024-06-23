const http = require('node:http');
const { findAvailablePort } = require('./free-port.js');
const server = http.createServer((req, res) => {
    res.end('Hola mundo');
})

findAvailablePort(3000).then(port => {
    server.listen(port, () => {
        console.log(`Server listening on port port http://localhost:${port}`);
    })
})
