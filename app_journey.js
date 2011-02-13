var journey = require('journey');
var db = require('./dbstub.js');

//
// Create a Router
//
var router = new (journey.Router);

// Create the routing table
router.map(function() {
    this.root.bind(function(req, res) {
        res.send("Hei")
    });
    router.get(/^employee\/([0-9]+)$/).bind(function (req, id, res) {
        try {
            db.get(id, function(employee) {
                res.send(200, {}, employee);
            });
        } catch (e) {
            res.send(500, {}, e.message());
        }
    });
    this.post('/employees').bind(function(req, res, employee) {
        console.log(employee.type);
        db.put(employee)
        res.send(200);
    });
});

app = require('http').createServer(function(request, response) {
    var body = "";

    request.addListener('data',
            function(chunk) {
                body += chunk
            });
    request.addListener('end',
            function() {
                //
                // Dispatch the request to the router
                //
                router.handle(request, body,
                        function(result) {
                            response.writeHead(result.status, result.headers);
                            response.end(result.body);
                        });
            });
}).listen(3000);
console.log("Server listening on: http://localhost:3000");
