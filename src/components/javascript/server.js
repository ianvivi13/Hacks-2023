var count = 0;

var http = require('http');
var util = require('util')
http.createServer(function (req, res) {
    if (req.method === 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
            document.getElementById("no-lever").innerHTML = data;
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('callback(\'{\"msg\": \"OK\"}\')');
    }
    else
    {
        console.log("GET");
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('callback(\'{\"msg\": \"OK\"}\')');
    }
}).listen(8090);
console.log('Server running on port 8090');

function changeImg() {
    count++;
    document.getElementById("problem").src = "../assets/created-problems/trolley-problem-" + count + ".jpg";
    document.getElementById("no-lever").innerHTML = "0";
    document.getElementById("lever").innerHTML = "0";
}

function endSession() {
    if(confirm("End the current session?")) {
        window.location.href = "index.html";
    }
}