app.controller('toastrController', ['$scope', 'toastrNotification', '$timeout', function($scope, toastrNotification, $timeout, $window, $http, $filter) {
    $scope.var = "HELLO WORLD";
    
    $scope.toastrType = [];
    
    $scope.randomMessage = [];
    
    $scope.toastr = {
        title : "",
        message : "",
        type : "",
    };
    
    $scope.init = function()
    {
        $scope.toastrType.push({type : 'info'});
        $scope.toastrType.push({type : 'success'});
        $scope.toastrType.push({type : 'warning'});
        $scope.toastrType.push({type : 'error'});
        
        $scope.randomMessage.push("Good software, like wine, takes time");
        $scope.randomMessage.push("Every great developer you know got there be solving problems they were unqualified to solve until they actually did it");
        $scope.randomMessage.push("No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.");
        $scope.randomMessage.push("Java is to JavaScript as ham is to hamster");
        $scope.randomMessage.push("One of the best programming skills you can have is knowing when to walk away for awhile");
    };
    $scope.init();
    
    $scope.randomCount = 0;
    $scope.randomToastr = function()
    {
        toastrNotification.showNotification($scope.randomMessage[$scope.randomCount % $scope.randomMessage.length], $scope.toastrType[$scope.randomCount % $scope.toastrType.length].type);
        $scope.randomCount++;
    };
    
    $scope.showToastr = function()
    {
        toastrNotification.showNotification($scope.toastr.message, $scope.toastr.type.type, $scope.toastr.title);
    };
}]);