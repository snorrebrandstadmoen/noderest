var Client = require('mysql').Client,
        client = new Client(),
        TEST_DATABASE = 'test',
        TEST_TABLE = 'ansatte';

client.user = 'rest';
client.password = 'node';
client.connect();

exports.get = function(id, callback) {
    client.query('SELECT * FROM ' + TEST_DATABASE + "." + TEST_TABLE + ' WHERE ID=' + id,
            function selectCb(err, results, fields) {
                if (err) {
                    throw err;
                }
                eval(callback(results));
            });
};

exports.all = function(callback) {
    client.query('SELECT * FROM ' + TEST_DATABASE + "." + TEST_TABLE,
            function selectCb(err, results, fields) {
                if (err) {
                    throw err;
                }
                eval(callback(results));
            });
}

exports.put = function (employee) {
    map[employee.id] = employee;
};


/*
 Employee = (function() {
 function Employee(id, name) {
 this.id = id;
 this.name = name;
 }

 return Employee;
 })();

 var map = new Object();
 map[123] = new Employee(123,"Snorre");
 map[124] = new Employee(124,"Per");*/
