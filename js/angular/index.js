app.controller('indexController', ['$scope', 'toastrNotification', '$timeout', function($scope, toastrNotification, $timeout, $window, $http, $filter) {
    $scope.currentPage = 'home.html';
    $scope.isLoading = true;
    
    $scope.earthSpeed = "30km/sec";
    
    $scope.currentTechnology = {};
    $scope.availableTechnologies = [];
    $scope.currentTechnologyIndex = 0;
                                   
    $scope.init = function()
    {
        /*var obj = {
            index : 0,
            title : "HTML",
            text : "HTML stands for Hyper-Text Markup Language and is the standard markup language for web pages and web applications. Initially released in 1993, HTML was developed at CERN by Tim Berners-Lee and colleagues. The first publically available description of HTML was released in December 1991. Currently, HTML5 is the latest standard issued by the W3C consortium, and it is this specification of HTML we are learning today.",
        };
        
        $scope.availableTechnologies.push(obj);
        
        var obj2 = {
            index : 1,
            title : "CSS",
            text : "yay CSS stands for Cascading Style Sheets and is commonly used as a means of styling our HTML documents. CSS can be used to make a website look very user-friendly, or very ugly. CSS was initially released in 1996, and has three ways of being applied to HTML documents. The first is inline-styling, where the element itself is given a style tag and some style attributes. In the early days, this was how websites were styled, but this quickly becomes cumbersome when you wish to modify the style of elements across several pages. The second is with a reference style, located in the head of the document. This can style the entire document in which its called, but does not style elements on other pages. The third way is the have an externally linked stylesheet (external to the page being rendered). This allows all the pages to utilise one style element, so when an update is needed we can change it once without changing multiple pages and risk missing one. We are using an external stylesheet in todays demonstration.",
        };
        
        $scope.availableTechnologies.push(obj2);
        
        var obj3 = {
            index : 2,
            title : "JS",
            text : "JS, or JavaScript, is a client-side scripting language. It is an interpreted language, which means errors are not going to be found in your syntax until run-time. It is dynamic, weakly typed, and is one of the three core technologies in WWW content production alongside HTML and CSS. First released in 1995, the last stable version was available in June 2017. Some server-side JS frameworks exist, such as NodeJS, but we will not be worrying with these tonight.",
        };
        
        $scope.availableTechnologies.push(obj3);*/
        
        var obj4 = {
            index : 3,
            title : "PHP",
            text : "PHP stands for PHP Hyper-text Processor. Its name is recursive, with the PHP in PHP Hyper-text Processor standing for PHP Hyper-text processor, and so on and so forth... PHP is a server-size scripting language and is primarily for web-development but can be used as a general purpose language if you have the interpreter for it. PHP can be embedded into HTML markup (see WordPress), or kept in its own file system as a program. Like JS, PHP is interpreted and weakly-typed, allowing a lot of flexibility between both. Until 2014 PHP did not have a formal specificiation, however, since 2014 the industry has been moving towards creating a formal PHP standard. The current version of PHP is PHP7, but this has not yet been adopted by many.",
        };
        
        $scope.availableTechnologies.push(obj4);
        
        var obj5 = {
            index : 4,
            title : "AngularJS",
            text : "AngularJS is a framework for Javascript that allows for application development within web environments. It allows us to utilise the Model-View-Controller (MVC) and Model-View-ViewModel (MVVM) frameworks. AngularJS is written in JS, but provides a framework for extending our HTML and web developments. It is a core part of the MEAN bundle (comprising MongoDB, Express.js, AngularJS, and Node.js), a software bundle that allows for web development to take place in entirely one language. We are not using the framework fully here, nor are we necessarily using it properly - but we are using it to demonstrate some of its properties and provide a single-page website for tonight.",
        };
        
        $scope.availableTechnologies.push(obj5);
        
        $scope.currentTechnology = $scope.availableTechnologies[0];
        
        $scope.isLoading = false;
    };
    $scope.init();    
    
    $scope.changePage = function(page)
    {
        $scope.isLoading = true;
        $scope.currentPage = page;
        $scope.isLoading = false;
        toastrNotification.showNotification("Page changed!", 'success');
    };
    
    $scope.clickImg = function(imgID)
    {
        if(imgID === 1)
            toastrNotification.showNotification("Swedish people learning to code", 'info');
        else if (imgID === 2)
            toastrNotification.showNotification("Chequered flag at Cadwell Park", 'warning');
        else if (imgID === 3)
            toastrNotification.showNotification("Synchronising watches gentlemen...", 'success');
    };
    
    $scope.convertUnit = function()
    {
        if($scope.earthSpeed.indexOf("30") !== -1)
            $scope.earthSpeed = "18.64miles/sec";
        else
            $scope.earthSpeed = "30km/sec";
    };
    
    $scope.justAPoem = function()
    {
        toastrNotification.showNotification("This paragraph does nothing special - it is just a poem, honest...", 'info');  
    };
    
    $scope.technologyGoBack = function()
    {
        if($scope.currentTechnology.index == 0)
            toastrNotification.showNotification("You cannot go back any further", 'warning');
        else
            $scope.currentTechnology = $scope.availableTechnologies[$scope.currentTechnology.index - 1];
    };
    
    $scope.technologyGoForward = function()
    {
        if($scope.currentTechnology.index == ($scope.availableTechnologies.length - 1))
           toastrNotification.showNotification("You cannot go forward any further", 'warning');
        else
            $scope.currentTechnology = $scope.availableTechnologies[$scope.currentTechnology.index + 1];
    };
    
    $scope.notJustAPoem = function()
    {
        toastrNotification.showNotification("Some poems can be windows to the soul, or to the heart and mind of that who wrote them.", 'info');
        toastrNotification.showNotification("These might just be trash though. Who knows? Without knowing the author the intent is unclear.", 'warning');
    };
}]);