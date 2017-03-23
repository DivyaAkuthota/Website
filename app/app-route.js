// app.config(function($routeProvider,$locationProvider){
//     $routeProvider
//         .when("/home",{
//             templateUrl : "app/templates/home.html",
//             controller : "AboutController"
//         })
//         .when("/portfolio",{
//             templateUrl : "app/templates/portfolio.html",
//             controller : "PortfolioController",
//             controllerAs : "vm"
//         })
//         .when('/about',{
//             templateUrl : "app/templates/home.html",
//             controller : ""
//         })
//         .when("/projects", {
//             templateUrl : "app/templates/projects.html", // replacing with portfolio for testing.. original - home.html
//             controller : "ProjectsController",// replacing with portfolio for testing.. original - PortfolioController
//             controllerAs : "vm"
//         })
//         .when("/",{
//             templateUrl : "app/templates/home.html",
//             controller : "AboutController"
//         })
//         .otherwise({redirectTo:"/"});
//    $locationProvider.html5Mode(true).hashPrefix('!');
// });
//

app.config(['$routeProvider','$locationProvider','$stateProvider','$urlRouterProvider' , function($routeProvider,$locationProvider,$stateProvider,$urlRouterProvider){

    $stateProvider
        .state("home",{
            url : "/home",
            templateUrl : "app/templates/home.html",
            controller : "HomeController"
        })
        .state("portfolio",{
            url : "/portfolio",
            templateUrl : "app/templates/portfolio.html",
            controller : "PortfolioController"
        })
        .state("about",{
            url : "/about",
            templateUrl : "app/templates/About.html",
            controller : "AboutController"
        })
        .state("projects", {
            url : "/projects",
            templateUrl : "app/templates/projects.html", // replacing with portfolio for testing.. original - home.html
            controller : "ProjectsController"
        })
        .state("resume",{
            url : "/resume",
            templateUrl : "app/templates/Resume.html",
            controller : ""
        });
    $urlRouterProvider.otherwise("/home");
    // $locationProvider.html5Mode(true).hashPrefix('!');
}]);