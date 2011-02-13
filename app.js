var http = require('http');

var app = module.exports = http.createServer(function(req, res) {
	
	console.log(req.url);
	
	if (req.url === "/employee") {
		res.writeHead(200, {
	        'Content-Type': 'application/json'
	    });
	    res.end('{"Department": "Technology","Email": "tore.lervik@bekk.no","EndDate": "", "FirstName": "Tore","Gender": "Mann","Id": 461,"ImageUrl": "https:\/\/intern.bekk.no\/employees\/ViewEmployeeImage.ashx?thumbnail=true&thumbsize=100&employee=461","InterestGroup": "Tech Entry","LastName": "Lervik","MobilePhone": "47010713","PostalAddress": "Eiksmarka","PostalNr": "1359","Seniority": "Konsulent","StartDate": "20100803","Status": "Ansatt","StreetAddress": "nadderudveien 119c"}');
	} else {
		res.writeHead(404, {
	        'Content-Type': 'text/html'
	    });
		res.end("No luck!")
	}

}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');

