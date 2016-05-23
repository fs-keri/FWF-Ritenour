/* Keri Ritenour
 Week 3 - CRUD Style Application
 */


angular.module('myApp').service('dataService', function() {

    /*Array of contacts*/
    var contactArray = [
        {
            position: "Managing Partner",
            name: "Beth Jackson",
            phone: "540-833-2911",
            address: "2 South Braddock Street",
            city: "Winchester",
            state: "VA",
            zip: "22602",
            email: "beth@westrat.org"
        },
        {
            position: "Operations Manager",
            name: "Mandi Perry",
            phone: "540-661-9645",
            address: "148 Back Road",
            city: "Winchester",
            state: "VA",
            zip: "22603",
            email: "mandi@westrat.org"

        },
        {
            position: "Social Media Marketing",
            name: "Marissa Andrick",
            phone: "703-869-1274",
            address: "2344 Main Street",
            city: "Front Royal",
            state: "VA",
            zip: "22611",
            email: "marissa@westrat.org"

        },
        {
            position: "Project Manager",
            name: "Faye Guerra",
            phone: "550-231-5885",
            address: "1078 Cabin Road",
            city: "Winchester",
            state: "VA",
            zip: "22601",
            email: "faye@westrat.org"

        }
    ]


    /*Returns array of contacts*/
    this.getContact = function() {
        var str = localStorage.getItem("contactList");
        contactArray = JSON.parse(str)  || contactArray;
        return contactArray;
    }


    /*Add contact to array*/
    this.newContact = function(name, title, addy, city, st, zip, ph, mail) {
        var newContact = {
            name:       name,
            position:   title,
            address:    addy,
            city:       city,
            state:      st,
            zip:        zip,
            phone:      ph,
            email:      mail
        };

        contactArray.push(newContact);
        var str = JSON.stringify(contactArray);
        localStorage.setItem("contactList", str);
    }


    /*Delete contact*/
    this.removeContact = function(contact) {
        contactArray.splice(contactArray.indexOf(contact), 1);
        var str = JSON.stringify(contactArray);
        localStorage.setItem("contactList", str);
    }




/*Array of projects*/
var projectArray = [
    {
        project: "Discovery Museum",
        manager: "Marissa Andrick",
        start: "April 15",
        prototype: "May 2",
        end: "June 4",
    },
    {
        project: "Trinity Church",
        manager: "Faye Guerra",
        start: "Jan 22",
        prototype: "Feb 12",
        end: "April 5",
    },
    {
        project: "EZGSA",
        manager: "Faye Guerra",
        start: "May 3",
        prototype: "May 27",
        end: "June 8",
    },
    {
        project: "Rocket Dog Rescue",
        manager: "Mandi Perry",
        start: "May 24",
        prototype: "Jun 12",
        end: "July 3",
    }
]


/*Returns array of projects*/
this.getProject = function() {
    var str = localStorage.getItem("projectList");
    projectArray = JSON.parse(str)  || projectArray;
    return projectArray;
}


/*Add project to array*/
this.newProject = function(project, man, start, prototype, end) {
    var newProject = {
        project:    project,
        manager:    man,
        start:      start,
        prototype:  prototype,
        end:        end
    };

    projectArray.push(newProject);
    var str = JSON.stringify(projectArray);
    localStorage.setItem("projectList", str);
}


/*Delete project*/
this.removeProject = function(project) {
    projectArray.splice(projectArray.indexOf(project), 1);
    var str = JSON.stringify(projectArray);
    localStorage.setItem("projectList", str);
}




/*Array of tasks*/
var tasksArray = [
    {
        task: "Rocket Dog - Setup on Server",
        due: "May 24"
    },
    {
        task: "Trinity - content migration",
        due: "January 29"
    },
    {   task: "EZGSA  Testing",
        due: "June 6"
    },
    {
        task: "Discovery Museum - Launch",
        due: "June 4"
    }
    ]


/*Returns array of tasks*/
this.getTask = function() {
    var str = localStorage.getItem("tasksList");
    tasksArray = JSON.parse(str)  || tasksArray;
    return tasksArray;
}


/*Add task to array*/
this.newTask = function(task, due) {
    var newTask = {
        task:    task,
        due:     due
    };

    tasksArray.push(newTask);
    var str = JSON.stringify(tasksArray);
    localStorage.setItem("tasksList", str);
}

/*Delete task*/
this.removeTask = function(tasks) {
    tasksArray.splice(tasksArray.indexOf(tasks), 1);
    var str = JSON.stringify(tasksArray);
    localStorage.setItem("tasksList", str);
}

});
