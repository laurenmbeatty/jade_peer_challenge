/**
 * Created by Lauren on 10/6/15.
 */
var app = angular.module('myApp',[]);

app.controller('MemeController', ["$scope","$http", function($scope,$http){
    $http.get('/memes/json').then(function(response){
        for (var i=0;i<response.data.length;i++) {
            $scope["caption_text"+i] = response.data[i].quote;
        }
    });
}]);