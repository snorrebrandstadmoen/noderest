Employee = (function() {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }

    return Employee;
})();

var map = new Object();
map[123] = new Employee(123,"Snorre");
map[124] = new Employee(124,"Per");

exports.get = function(k, callback) {
    eval(callback(map[k]));
};

exports.put = function (employee) {
    map[employee.id] = employee;
};

