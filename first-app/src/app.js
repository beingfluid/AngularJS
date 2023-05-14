angular.module('lists',[]); //setter syntax

angular.module('lists')
    .controller("ListController",ListController);

    ListController.$inject=[];

function ListController(){ 

//    this.numbers=[1,2,3,4];


this.cars=[
    {
        make:'Toyota',
        model:"corolla",
        year:2007
    },
    {
        make:'Hero',
        model:"PassionXPro",
        year:2009
    },
    {
        make:'Royal',
        model:"Enfield",
        year:2011
    }
];

// this.colors=["red","green","blue"];
// this.favoriteColor=this.colors[0];

this.favoriteCar=this.cars[0];
    
}

