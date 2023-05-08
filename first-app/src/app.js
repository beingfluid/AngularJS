angular.module('counter',[]); //setter syntax

angular.module('counter')
    .controller("CounterController",CounterController);

    CounterController.$inject=[];

function CounterController(){ 
  
    var ctrl=this;

    ctrl.count=0;
    ctrl.increment=function(){
            
        ctrl.count+=1;
    };
    ctrl.decrement=function(){
            
        ctrl.count-=1;
    };
}

/*
angular.module('counter')
    .controller("CounterController",CounterController);

    CounterController.$inject=[];

function CounterController(){ 
  
    this.count=0;
    this.increment=function(){
            
        this.count+=1;
    };
    this.decrement=function(){
            
        this.count-=1;
    };
}

*/

/*
angular.module('counter')
    .controller("CounterController",cheeseburger);

cheeseburger.$inject=["$scope"];

function cheeseburger($scope){ 
    // console.log(this);
    $scope.count=0;
    $scope.increment=function(){
            
        $scope.count+=1;
    };
    $scope.decrement=function(){
            
        $scope.count-=1;
    };
}
*/
/*
angular.module('counter')
    .controller("CounterController",[
        "$scope",
        function CounterController($scope){ //now $scope can be replaced as a
            $scope.count=0;
            $scope.increment=function(){
                
                $scope.count+=1;
            };
            $scope.decrement=function(){
                
                $scope.count-=1;
            };
    }]);
*/