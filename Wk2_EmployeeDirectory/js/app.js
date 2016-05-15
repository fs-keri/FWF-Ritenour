/* Keri Ritenour
 Week 2 - Employee Directory
 */

/*App Controller*/
angular.module('myApp', []).controller('EmployeeController', function($scope,dataService){

    $scope.empPosition;
    $scope.empName;
    $scope.empAddress;
    $scope.empCity;
    $scope.empState;
    $scope.empZip;
    $scope.empPhone;


    /*Get employees by dataservice call*/
    $scope.employeeArray = dataService.getEmployees();

    console.log($scope.employeeArray);


    /*Add employee by dataservice function*/
    $scope.addEmployee = function() {
        dataService.newEmployee($scope.empPosition, $scope.empName,$scope.empAddress, $scope.empCity, $scope.empState, $scope.empZip, $scope.empPhone);

        $scope.empPosition = '';
        $scope.empName = '';
        $scope.empAddress = '';
        $scope.empCity = '';
        $scope.empState = '';
        $scope.empZip = '';
        $scope.empPhone = '';
    }



    /*Delete employee*/
    $scope.deleteEmployee = function(employeeToDelete) {
        dataService.removeEmployee(employeeToDelete);
    }

});
