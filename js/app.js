var app = angular.module('ClubReadyCheckIn',['ngRoute']); //Place App Name in Single Quotes

//app.config(function($routeProvider){
//    $routeProvider
//        // Route for root page
//        .when('/', {
//            templateUrl : 'views/home/home.html',
//            controller : 'HomeController'
//        })
        
        // Location for new route, e.g. '/about'
        
        // Route for anyother path is tried, re-direct to root
//        .otherwise({ redirectTo : '/'});
//});
app.controller('HomeController',['$scope',function($scope){
    $scope.APIKEY = "xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx";
    $scope.APIPath = "http://www.clubready.com/api/resource"
    $scope.name = "Content Goes Here";
    $scope.AllowEntry = true;
    console.log(APIKEY);
    $scope.getUser = function(){
    
      $http.get($scope.APIPath+"?ApiKey="+$scope.APIKEY).then(function(response){
        console.log(response);
      });  
        
    };
}]);
