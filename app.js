var app = angular.module("jsbin", ["chart.js"]);

app.controller("MainController", ['$scope', '$http', function ($scope, $http) {
  $scope.show = false;  
    $scope.submit = function(form) {
       $scope.show = false;
       $http({
           url: "http://jsonplaceholder.typicode.com/posts/1",
           method: 'GET'
      }).then(function successCallback(response) {
           $scope.options = { animation: false};
           $scope.labels = ['Monday', 'Tuesday', 'Wednesday',
                            'Thursday', 'Friday', 'Saturday',
                            'Sunday'];
           $scope.data = [];
         
           var array = [];         
           for (i=0; i<7; i++) {
                var value = Math.floor((Math.random() * 100) + 1);
                array.push(value);
           }  
           $scope.data.push(array);
         
           var colorString = "rgba(";
           for (i=0; i<3; i++) {
                var colourFlag = Math.floor((Math.random() * 255) + 1);  
                colorString += colourFlag.toString() + ", ";
           }
           colorString += "1)";
         
           $scope.series = ['Series A'];
           colours = [{ // default
             "fillColor": colorString,
             "strokeColor": colorString,
             "pointColor": "rgba(220,220,220,1)",
             "pointStrokeColor": "#fff",
             "pointHighlightFill": "#fff",
             "pointHighlightStroke": "rgba(151,187,205,0.8)"
           }];
           $scope.colours = colours;
           $scope.show = true;
      }, function errorCallback(response) {

      }); 
    };
 
}]);
