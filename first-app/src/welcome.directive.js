angular.module('custom-directives')
    .directive("welcomeTag",welcome); //Step 9

function welcome(){ 

    //Step 1
    // return {
    //    restrict:'E',
    //    template:'<h1>Howdy Buckaroo!<h1>' 
         
    // }

    //Step 2
    // return {
    //     restrict:'A',
    //     template:'<h1>Howdy Buckaroo!<h1>' 
          
    //  }

    //Step 3
    // return {
    //     restrict:'C',
    //     template:'<h1>Howdy Buckaroo!<h1>' 
          
    //  }

     //Step 4
    // return {
    //     restrict:'M',
    //     template:'<h1>Howdy Buckaroo!<h1>' 
          
    //  }

    //Step 5

    WelcomeController.$inject=["$scope"]; //step 7
    WelcomeController.$inject=[]; //step 11

    // return {
    //     restrict:'EAC',
    //     template:'<h1>Howdy {{name}}!<h1>',
    //     link: WelcomeLink,
    //     controller: WelcomeController
    //  }

    

     
     function WelcomeLink(scope,element,attrs){
        // console.log("linking");
        //Step 6
        element.on('mouseenter',function mouseEnter(){
                element.css('color','salmon');
            });
     }

  

     function WelcomeController(){
        // console.log("controlling");
        //Step 7
        // $scope.name="Vishal";
        //Step 11
        var c=this;
        c.name="Vishal";
     }

      //Step 10
      return {
        restrict:'EAC',
        templateUrl:'src/welcome.directive.html',
        link: WelcomeLink,
        controller: WelcomeController,
        controllerAs: "c" //Step 11

     }
     //Here you need server : py -m http.server 8000

   
}

