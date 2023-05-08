var app=angular.module('first-app',[]); // bootstrap or create the module (i.e. application)

app.controller("MainController", function($scope){
    $scope.message="Hello from Angular";
});