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
