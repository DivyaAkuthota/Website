app.controller("PortfolioController", function($scope){
    //var vm = this;
    $scope.portfolioName = "Divya";
   // vm.education = "Education";

    $scope.education = {
        "title" : "Education",
        "level" : [{
            "degree": "Master's in Computer Science",
            "university": "State University of New York, StonyBrook",
            "location": "New York, USA",
            "years": "Aug'12 - Dec'13",
            "logo":"resources/images/sbu-logo.jpg",
            "grad":"resources/images/2014edit.png"
        },
            {
                "degree" : "Bachelor's of Engineering",
                "university" : "University College of Engineering, Osmania University",
                "location" : "Hyderabad, India",
                "years" : "Aug'08 - May'12",
                "logo": "resources/images/ou-logo.png",
                "grad": "resources/images/2012.png"
            }
        ]
    };

    $scope.work = {
        "title": "Work Experience",
        "company" : [{
            "role" : "Web and Mobile Developer",
            "workplace" : "Bank of America Merrill Lynch",
            "years" : "Feb'2014 - Present",
            "location" : "New Jersey, USA"
        },
            {
                "role" : "Web Developer - Intern",
                "workplace" : "Bank of America Merrill Lynch",
                "years" : "Jun'13 - Aug'13",
                "location" : "New Jersey, USA"
            },
            {
                "role" : "Graduate Assistant",
                "workplace" : "Graduate School, StonyBrook University",
                "years" : "Jan'13 - Dec'13",
                "location" : "New York, USA"
            },
            {
                "role" : "Mobile Developer - Intern",
                "workplace" : "CMC Limited",
                "years" : "May'11 - May'12",
                "location" : "Hyderabad, Andhra Pradesh, India"
            }]
    };

    $scope.skills = {
        "title" : "Skills",
        "category" : [{
            "title" : "Programming Languages",
            "list" : "Java, C++, Objective C, C"
            },
            {
                "title" : "Database Technologies",
                "list" : "MySQL, PostgreSQL"
            },
            {
                "title" : "Web Technologies",
                "list" : "HTML5, AJAX, jQuery, PHP, CSS3, Javascript, AngularJS, Bootstrap UI, TypeScript, Ionic Framework, Jasmine, Karma, RequireJS"
            }]
    };

});