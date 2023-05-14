angular.module('events',[]); //setter syntax

angular.module('events')
    .controller("EventController",EventController);

    EventController.$inject=[];

function EventController(){ 
    this.color='null';
    this.style=function(){
        return {
            'background-color':this.color
        }
    };
    this.setColor=function(color){
        this.color=color;
    }
    this.greet=function(e){
        console.log("Event: ",e);
    }
}

