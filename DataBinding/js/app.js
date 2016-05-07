var app = angular.module('myApp', []);
app.controller('DBController', function($scope){

    $scope.userName;

    $scope.nameArray = ['Sean', 'Scott', 'Rebecca', 'Anna'];

    $scope.addName = function(){
        $scope.nameArray.push($scope.userName);

        $scope.userName= '';
    }

    $scope.deleteName = function(deletedName){
        var idx = $scope.nameArray.indexOf(deletedName);
        $scope.nameArray.splice(idx, 1);
    }

});