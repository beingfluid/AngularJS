angular.module('builtins',[]); //setter syntax

angular.module('builtins')
    .controller("BuiltinController",BuiltinController);

BuiltinController.$inject=[];

function BuiltinController(){ 

    this.message="working with builtins";
    this.isAdmin=false;
    this.favouriteColor='red';
    
    
}

