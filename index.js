var http = require('http');
var os = require('os');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
<style>
body{ 
    margin:50 auto; 
    text-align:center;
}
</style>
<body>
<div><h1>Hello Turple!</h1>Hostname is ${os.hostname()}</div>
</body>
`);
    res.end();
}).listen(8902);

