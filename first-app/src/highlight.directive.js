angular.module('custom-directives')
    .directive("highlight",highlight);

function highlight(){ 
    return function linking(scope,element,attrs){
        // STEP 1
        // console.log(scope);
        // console.log(element);
        // console.log(attrs);
        // console.log(attrs.base);

         // STEP 2
        // element.css('border-color',attrs.base);

         // STEP 3
        // element.on('mouseenter',function mouseEnter(){
        //     console.log("Enter");
        // });
        // element.on('mouseleave',function mouseLeave(){
        //     console.log("Leave");
        // });

         // STEP 4
        // element.on('mouseenter',function mouseEnter(){
        //     element.css('border-color',attrs.highlight);
        // });
        // element.on('mouseleave',function mouseLeave(){
        //     element.css('border-color',attrs.base);
        // });
        
         
    }
   
}

