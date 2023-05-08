var app=angular.module('counter',[]); 

app.controller("CounterController", 
    function CounterController($scope){ //$scope = bridge between controller and view
    // console.log($scope);
    console.log(this);
    $scope.count=0;
    $scope.increment=function(){
        // console.log("incrementing");
        $scope.count+=1;
    };
    $scope.decrement=function(){
        // console.log("decrementing");
        $scope.count-=1;
    };

    });