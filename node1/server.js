let http = require('http');
let fs = require('fs')

let server = http.createServer(function (request, response) {
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    // response.end('Hello node ')

    let url = request.url;
    if (url === '/data') {
        fs.readFile('./data.json', function (err, data) {
            if (!err) {
                response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
                response.end(data);
            }else{
                throw err;
            }
        })
    }else{
        console.log("错误")
    }
});
server.listen(8080);

