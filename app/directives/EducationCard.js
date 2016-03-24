app.directive("educationCard", function(){
    return {
        restrict : "AE",
        replace : true,
        templateUrl : "app/templates/EducationCard.html",
        controller:"educationCardController",
        controllerAs:"vm",
        bindToController : true,
        scope: {
            education: "="
        }
    };

});


app.controller("educationCardController", function($scope){
    var vm = this;
    vm.education;
//vm.education = "Divya";
});