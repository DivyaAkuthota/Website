app.directive("workCard", function(){
   return {
       restrict: 'AE',
       templateUrl: "app/templates/WorkCard.html",
       controller: "WorkCardController",
       controllerAs: "vm",
       bindToController: true,
       scope: {
           work: "="
       }
   }
});


app.controller("WorkCardController", function(){
    var vm = this;
    vm.work;
});