app.directive("imageCard", function(){
    return {
        restrict : "AE",
        replace : false,
        templateUrl : "app/templates/ImageCard.html",
        controller:"imageCardController",
        controllerAs:"vm",
        bindToController : true,
        scope: {
            image: "="
        }
    };

});


app.controller("imageCardController", function($scope){
    var vm = this;
    vm.image;


});