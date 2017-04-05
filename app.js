var app = angular.module('',['ngRoute']); //Place App Name in Single Quotes

app.config(function($routeProvider){
    $routeProvider
        // Route for root page
        .when('/', {
            templateUrl : 'views/home/home.html',
            controller : 'HomeController'
        })
        
        // Location for new route, e.g. '/about'
        
        // Route for anyother path is tried, re-direct to root
        .otherwise({ redirectTo : '/'});
});