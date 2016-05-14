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

// should use string.length and array.indexOf() to validate no duplicates??