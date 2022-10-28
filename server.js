const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req, res) {
    if (req.url === '/home.html' || req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/home.html').pipe(res);
    } else if (req.url === '/About.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/About.html').pipe(res);
    } else if (req.url === '/Contact.html') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/Contact.html').pipe(res);
    }
});
server.listen(4000, '127.0.0.1');
console.log('yesssss jj');
