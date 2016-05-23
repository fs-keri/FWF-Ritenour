var app = angular.module("myApp", []);
app.controller("DBController", function($scope,dataservice){

    $scope.userName;

    $scope.nameArray = dataservice.getNames();

    $scope.addName = function(){
        dataservice.addName($scope.userName);

        $scope.userName= '';
    }

    $scope.deleteName = function(deletedName){
        dataservice.removeName(deletedName);
    }

});