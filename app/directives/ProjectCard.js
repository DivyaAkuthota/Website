app.directive("projectCard", function(){
    return {
        restrict: 'AE',
        templateUrl: "app/templates/ProjectsCard.html",
        controller: "ProjectsCardController",
        controllerAs: "vm",
        bindToController: true,
        scope: {
            project: "="
        }
    }
});


app.controller("ProjectsCardController", function(){
    var vm = this;
    vm.project;
});