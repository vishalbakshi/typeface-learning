var http = require('http'),
    fileSystem = require('fs'),
    path = require('path'),
    port = 3000;

const server = http.createServer(function(request, response) {
    var filePath = path.join(__dirname, 'index.html');
    var stat = fileSystem.statSync(filePath);

    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
})


server.listen(port, () => {
    console.log(`Server running at port ${port}`)
  })