/* Keri Ritenour
 Week 3 - CRUD Style Application
 */

/*App Controller*/
angular.module('myApp', ['ngRoute'])

/*ROUTING VIEWS CONFIGURATION*/
 .config(function($routeProvider){

        $routeProvider.when('/view1',{
            templateUrl :   "view1.html",
            controller  :   "contactController"
        }).when('/view2',{
            templateUrl :   "view2.html",
            controller  :   "projectController"
        }).when("/view3/:taskParam",
            {
                templateUrl :   "view3.html",
                controller  :   "taskController"
        })
        .otherwise({
            redirectTo  :   "/view1"
        });

    })

/*App Controller for contact list*/
    .controller('contactController', function($scope,dataService){

    $scope.conPosition;
    $scope.conName;
    $scope.conAddress;
    $scope.conCity;
    $scope.conState;
    $scope.conZip;
    $scope.conPhone;
    $scope.conMail;


    /*Get contact by dataservice call*/
    $scope.contactArray = dataService.getContact();

    console.log($scope.contactArray);


    /*Add contact by dataservice function*/
    $scope.addContact = function() {
        dataService.newContact($scope.conPosition, $scope.conName,$scope.conAddress, $scope.conCity, $scope.conState, $scope.conZip, $scope.conPhone, $scope.conMail);

        $scope.conPosition = '';
        $scope.conName = '';
        $scope.conAddress = '';
        $scope.conCity = '';
        $scope.conState = '';
        $scope.conZip = '';
        $scope.conPhone = '';
        $scope.conMail='';
    }



    /*Delete contact*/
    $scope.deleteContact = function(contactToDelete) {
        dataService.removeContact(contactToDelete);
    }

})
/*App Controller for project list*/
.controller('projectController', function($scope,dataService){

    $scope.projName;
    $scope.projMan;
    $scope.projStart;
    $scope.projProto;
    $scope.projEnd;


/*Get project by dataservice call*/
    $scope.projectArray = dataService.getProject();

    console.log($scope.projectArray);


/*Add project by dataservice function*/
    $scope.addProject = function() {
        dataService.newProject($scope.projName, $scope.projMan, $scope.projStart, $scope.projProto, $scope.projEnd);

        $scope.projName = '';
        $scope.projMan = '';
        $scope.projStart = '';
        $scope.projProto = '';
        $scope.projEnd = '';
    }



/*Delete project*/
    $scope.deleteProject = function(projectToDelete) {
        dataService.removeProject(projectToDelete);
    }

})

/*App Controller for task list*/
.controller('taskController', function($scope,$routeParams,dataService) {

    $scope.taskName;
    $scope.taskDue;

    $scope.anyWord = $routeParams.taskParam;


    /*Get task by dataservice call*/
    $scope.tasksArray = dataService.getTask();

    console.log($scope.tasksArray);


    /*Add task by dataservice function*/
    $scope.addTask = function () {
        dataService.newTask($scope.taskName, $scope.taskDue);

        $scope.taskName = '';
        $scope.taskDue = '';
    }


    /*Delete task*/
    $scope.deleteTask = function (taskToDelete) {
        dataService.removeTask(taskToDelete);
    }

});
