angular.module('dynamic-styles',[]); //setter syntax

angular.module('dynamic-styles')
    .controller("StyleController",StyleController);

StyleController.$inject=[];

function StyleController(){ 

   this.isAdmin=false;
    this.favouriteColor="red";
    this.width=50;
    this.special=false;
    this.myStyle=myStyle;

    function myStyle(){
        return {
            "background-color":this.favouriteColor,"width":this.width+"px"
        }
    }
    
}

