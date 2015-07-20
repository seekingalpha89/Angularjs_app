var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope) {
  $scope.author = {
    'name' : 'Alpha Oumar Sow',
    'title' : 'Web developer',
    'company' : 'sanarinfo.com'
  }
});

