angular.module('databinding',[]); //setter syntax

angular.module('databinding')
    .controller("DataBindController",DataBindController);

DataBindController.$inject=[];

function DataBindController(){ 

    // this.message="hello from angular";

    this.website={
        url:"https://itpro.tv",
        description:"Awesome!!!!!",
        photo:"https://placehold.it/50x50",
        name:"ITPRO.TV"
    }
    
}

