/* Keri Ritenour
 Week 2 - Employee Directory
 */


angular.module('myApp').service("dataService", function() {

    /*Array of employees*/
    var employeesArray = [
        {
            position: "Managing Partner",
            name: "Beth Jackson",
            phone: "540-833-2911",
            address: "2 South Braddock Street",
            city: "Winchester",
            state: "VA",
            zip: "22602"
        },
        {
            position: "Developer",
            name: "Keri Ritenour",
            phone: "540-661-9645",
            address: "148 Back Road",
            city: "Stephens City",
            state: "VA",
            zip: "22655"
        },
        {
            position: "Social Media Marketing",
            name: "Marissa Andrick",
            phone: "703-869-1274",
            address: "2344 Main Street",
            city: "Front Royal",
            state: "VA",
            zip: "22611"
        },
        {
            position: "Project Manager",
            name: "Faye Guerra",
            phone: "550-231-5885",
            address: "1078 Cabin Road",
            city: "Winchester",
            state: "VA",
            zip: "22601"
        }
    ]


    /*Returns array of employees*/
    this.getEmployees = function() {
        var str = localStorage.getItem("EmployeesDirectList");
        employeesArray = JSON.parse(str)  || employeesArray;
        return employeesArray;
    }


    /*Add employee to array*/
    this.newEmployee = function(name, title, addy, city, st, zip, ph) {
        var newEmployee = {
            name:       name,
            position:   title,
            address:    addy,
            city:       city,
            state:      st,
            zip:        zip,
            phone:      ph
        };

        employeesArray.push(newEmployee);
        var str = JSON.stringify(employeesArray);
        localStorage.setItem("EmployeesDirectList", str);
    }


    /*Delete employee*/
    this.removeEmployee = function(employee) {
        employeesArray.splice(employeesArray.indexOf(employee), 1);
        var str = JSON.stringify(employeesArray);
        localStorage.setItem("EmployeesDirectList", str);
    }

});