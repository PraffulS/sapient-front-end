var app = angular.module("mainapp", []); 
app.controller("maincontroller", function($scope,$http) {
$scope.list_of_games = [];
$scope.flag1 = false;
$scope.flag = false;
$http({
        method: "GET",
        url: "http://starlord.hackerearth.com/gamesext",
        dataType: 'json',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function successCallback(response) {
  $scope.flag= true;
      
   $scope.data1 = response.data;
   for (var i = $scope.data1.length - 1; i >= 0; i--) {
        $scope.list_of_games.push($scope.data1[i].title);  
    
    }
  }, function errorCallback(response) {
    alert("Sorry couldn't connect!");
  
});


 $scope.show_game = function(){
      $scope.flag= false;
     for (var i = $scope.data1.length - 1; i >= 0; i--) {
        if ($scope.curPlace==$scope.data1[i].title)
        {
          $scope.data2 = $scope.data1[i];
          $scope.flag1 = true;
          break;
        }
    }
    alert(JSON.stringify($scope.data2));

    	
};


function GetSortOrder(prop) {  
    return function(a, b) {  
        if (a[prop] > b[prop]) {  
            return 1;  
        } else if (a[prop] < b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
} 

$scope.check = function(value){
     if(value=='asc')
     {
      $scope.data1.sort(GetSortOrder("score"));

     }
     else if(value=='desc')
     {
      $scope.data1.sort(GetSortOrder("score"));
      $scope.data1.reverse();
     }
    $scope.flag=true;
    $scope.flag1=false;

      
  };
});