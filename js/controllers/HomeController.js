app.controller('HomeController',['$scope','$http',function($scope,$http){
    $scope.APIKEY = "xxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxx";
    $scope.APIPath = "https://www.clubready.com/api/resource"
    $scope.name = "Content Goes Here";
    $scope.AllowEntry = true;
    console.log($scope.APIKEY);
    $scope.errorMessage = "";
    $scope.barcode = "";
    $scope.getUser = function(){
        var fullAPIPath = $scope.APIPath+"?ApiKey="+$scope.APIKEY+"&Barcode="+$scope.barcode;
    if ($scope.barcode.length >=1){
        console.log(fullAPIPath);
      $http.get(fullAPIPath).then(function(response){
        if ( response.data.apiVersion == "1.0.0.0"){
            $scope.errorMessage="";
         $scope.name = response.data.basePath;   
        }
      });  
    }else{
     $scope.errorMessage= "Please enter a valid barcode";   
    }
        
    };
}]);
