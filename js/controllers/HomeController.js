app.controller('HomeController',['$scope','$http',function($scope,$http){
    $scope.APIKEY = "xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx";
    $scope.APIPath = "https://www.clubready.com/api/resource"
    $scope.name = "Content Goes Here";
    $scope.AllowEntry = true;
    console.log($scope.APIKEY);
    $scope.barcode = "";
    $scope.getUser = function(){
    if ($scope.barcode.length >=1){
      $http.get($scope.APIPath+"?ApiKey="+$scope.APIKEY+"&Barcode="+$scope.barcode).then(function(response){
        if ( response.data.apiVersion == "1.0.0.0"){
         $scope.name = response.data.basePath;   
        }
      });  
    }else{
     $scope.barcode= "Please enter a valid barcode";   
    }
        
    };
}]);
