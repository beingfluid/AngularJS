angular.module('custom-directives',[]); 

angular.module('custom-directives')
    .controller("MainController",MainController);

    MainController.$inject=[];

function MainController(){ 
    this.message="Welcome to angular";
   
}

