app.controller("ProjectsController",['$scope', function($scope){



    function  init() {
        $(document).ready(function(){
            $(this).scroll(0,0);
        });
    }

    init();
    $scope.workProjects = {
        "title" : "Work Projects",
        "projects" : [{
            "name" : "CCV Admin Tool",
            "technologies" : "AngularJS, HTML5, CSS3",
            "description" : "Developed a Supporting Tool for Client Centric View (CCV) that provides role-based monitoring of administrative details for the CCV."
        },
            {
                "name" : "RelationshipUI",
                "technologies" : "Angular JS, TypeScript, HTML5, CSS3, BootstrapUI",
                "description" : "Developing and supporting an Interactive tool, which will display connected relationships to a party in context."
            },
            {
                "name" : "Longevity(Hybrid iPad Application)",
                "technologies" : "Ionic Framework, Angular JS, HTML5, CSS3, BootstrapUI",
                "description" : "Developed and supporting the Web App for iPad to support portability across multiple operating systems."
            },
            {
                "name" : "Supporting and Regulating Widgets",
                "technologies" : "Angular JS, HTML5, CSS3, BootstrapUI",
                "description" : "Dependents, Date of Birth, Add Prospect - UI Widgets that are used across multiple Applications in the organization"
            },
            {
                "name" : "Event Alert System - Android Application",
                "technologies" : "Java, Android SDK",
                "description" : "Developed Android Mobile Application that captures images uploads in the server along with the details. Also Developed a supporting website that displays the latest images captured and simulates the features in the app."
            },
            {
                "name" : "Graduate School Website",
                "technologies" : "Javascript, HTML5, CSS3",
                "description" : "Maintenance of the Graduate School website, Graduate Program E-Brochures and Bulletin."
            }
        ]
    };

    $scope.academicProjects = {
        "title" : "Academic Projects",
        "projects" : [{
                "name" : "ITrack",
                "technologies" : "Java, Android SDK",
                "description" : "Developed an Android Mobile Application & website that tracks the path the user travelled on a website using the mobile GPS co-ordinates."
        },
            {
                "name" : "Spell Checker",
                "technologies" : "Java, Eclipse",
                "description" : "Developed a Java Application that gives word suggestions for the entered text based on the Levenstein algorithm, used to find hamming distance between any two words."
            },
            {
                "name" : "Treasure Hunt",
                "technologies" : "C#, Windows SDK",
                "description" : "Created a Windows Mobile game consisting of Questions leading to the treasure."
            }]
    };

}]);