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
            "grad":"resources/images/2014edit.png",
            "url":"http://www.stonybrook.edu/"
        },
            {
                "degree" : "Bachelor's of Engineering",
                "university" : "University College of Engineering, Osmania University",
                "location" : "Hyderabad, India",
                "years" : "Aug'08 - May'12",
                "logo": "resources/images/ou-logo.png",
                "grad": "resources/images/2012.png",
                "url":"http://www.uceou.edu/"
            }
        ]
    };

    $scope.work = {
        "title": "Work Experience",
        "company" : [{
            "role" : "iOS Mobile Developer",
            "workplace" : "Bank of America ",
            "years" : "Sept'2016 - Present",
            "location" : "New Jersey, USA",
            "collapseID" : "SFO-iOS",
            "logo" : "resources/images/BofA-logo.png"
        },
            {
            "role" : "Web and Mobile Developer",
            "workplace" : "Bank of America Merrill Lynch",
            "years" : "Feb'2014 - Sept'16",
            "location" : "New Jersey, USA",
            "collapseID" : "NJ-ML",
            "logo" : "resources/images/ml-logo.jpg"
        },
            {
                "role" : "Web Developer - Intern",
                "workplace" : "Bank of America Merrill Lynch",
                "years" : "Jun'13 - Aug'13",
                "location" : "New Jersey, USA",
                "collapseID" : "NJ-ML-Intern",
                "logo" : "resources/images/ml-logo.jpg"
            },
            {
                "role" : "Graduate Assistant",
                "workplace" : "Graduate School, StonyBrook University",
                "years" : "Jan'13 - Dec'13",
                "location" : "New York, USA",
                "collapseID" : "NY-SBU",
                "logo" : "resources/images/sbu-logo.jpg"
            },
            {
                "role" : "Android Mobile Developer - Intern",
                "workplace" : "CMC Limited",
                "years" : "May'11 - May'12",
                "location" : "Hyderabad, Andhra Pradesh, India",
                "collapseID" : "HYD-CMC",
                "logo" : "resources/images/CMC-logo.jpg"
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

    $scope.workProjects = {
        "title" : "Work Projects",
        "projects" :[
            {
              "name" : "BofA iPhone/iPad application",
                "technologies":"Objective C",
                "description":"Developing and maintaining mobile applications and features of the Bank of America Flagship iPhone/iPad Application."
            },
            {
            "name" : "CCV Admin Tool",
            "technologies" : "AngularJS, HTML5, CSS3",
            "description" : "Developed a Supporting Tool for Client Centric View (CCV) that provides role-based monitoring of administrative details for the CCV. Functionalities of the tool include adding, deleting, updating the count of views, sections, tiles ., configuration files., creating and managing Adhoc tiles., managing Response capture, templates, statistics, settings of Client Centric View. Client Centric View is a one place application for our associates/Financial Advisors to maintain Client profile information streamlines our internal processes and reporting. Benefits of CCv include : Improved Efficiency, Clearer Insight, Increased Product & Service Penetration and Positive Revenue Impact."
        },
            {
                "name" : "RelationshipUI",
                "technologies" : "Angular JS, TypeScript, HTML5, CSS3, BootstrapUI",
                "description" : "Developed an Interactive tool, which will display connected relationships to a party in context(Client). It is an easier way to manage client accounts across relationships. Tools helps in adding, deleting, moving a family member across the tree and editing the relationships and many.As it becomes increasingly important to provide a personalized goals-based experience to every client, RUI makes it an easy job for associates/Financial Advisors to deliver on this expectation. RUI is more efficient by aligning client details with the way associates interact with their clients within and outside their broader extended relationships.  Today's family and entity relationships can be complex and associates need the flexibility to easily engage with extended families, multiple generations, and other related parties through one interface in order to provide an optimal experience."
            },
            {
                "name" : "Longevity(Hybrid iPad Application)",
                "technologies" : "Ionic Framework, Angular JS, HTML5, CSS3, BootstrapUI",
                "description" : "Developed the Web App for iPad to support portability across multiple operating systems.It is an application looking to help clients explore and plan for the opportunities and challenges of living longer. The new advisor-led Longevity Discovery iPad App is now available to help associates facilitate a discussion with clients and/or prospects about the opportunities and challenges that come with living longer in retirement (the “longevity bonus”) to help them better plan for the years ahead."
            },
            {
                "name" : "Supporting and Regulating Widgets",
                "technologies" : "Angular JS, HTML5, CSS3, BootstrapUI",
                "description" : "Dependents, Date of Birth, Add Prospect - UI Widgets that are used across multiple Applications in the organization."+
                "Dependents - Helps in adding, editing and deleting Dependents for a client in context."+
                "Date of Birth - A calendar Widget that helps in adding/updating date of birth for the client in context."+
                "Add Prospect - A widget that helps in adding a new prospect with the all the details of the prospect."
            },
            {
                "name" : "Event Alert System - Android Application",
                "technologies" : "Java, Android SDK",
                "description" : "Developed Android Mobile Application that captures images uploads in the server along with the details like title, description and the location. Mobile App facilitates viewing the images based on the filters like date, title and location. Also Developed a supporting website that displays the latest images captured and simulates the features in the app."
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
            "name" : "ITrack - Android Application",
            "technologies" : "Java, Android SDK",
            "description" : "Developed an Android Mobile Application that tracks the path the user travelled on a website using the mobile GPS co-ordinates. App facilitates the user to start/end the tracking using the start/end buttons provided. User can also get the tracked path using his UserID. Also developed a supporting website that shows the paths tracked."
        },
            {
                "name" : "Spell Checker",
                "technologies" : "Java, Eclipse",
                "description" : "Developed a Java Application that gives word suggestions for the entered text based on the Levenstein algorithm, used to find hamming distance between any two words. User enters the text into a text box for spell checking. Application uses an inbuilt dictionary of words to compare the entered words one by one, using the above mentioned algorithm and gives suggestions for the user."
            },
            {
                "name" : "Treasure Hunt",
                "technologies" : "C#, Windows SDK",
                "description" : "Created a Windows Mobile game consisting of Questions and puzzles leading to the treasure."
            }]
    };

});