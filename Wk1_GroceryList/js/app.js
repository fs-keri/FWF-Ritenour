var app = angular.module('myApp', []);
app.controller('ListController', function($scope){

    $scope.newItem;

    //List item
    $scope.groceries = ['Eggs', 'Cheese', 'Milk', 'Bread'];

    $scope.addItem = function(){



        $scope.groceries.push($scope.newItem);

        $scope.newItem= '';
    }

    $scope.deleteItem = function(item){
        var idx = $scope.groceries.indexOf(item);
        $scope.groceries.splice(idx, 1);
    }

});