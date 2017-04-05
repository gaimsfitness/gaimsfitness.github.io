app.controller('HomeController',['$scope',function($scope){
    $scope.APIKEY = "xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx";
    $scope.APIPath = "http://www.clubready.com/api/resource"
    $scope.name = "Content Goes Here";
    $scope.getUser = function(){
    $scope.AllowEntry = 
      $http.post($scope.APIPath+"?ApiKey="+$scope.APIKEY).then(function(response){
        $scope.AllowEntry = response.data;  
      });  
        
    };
}]);
