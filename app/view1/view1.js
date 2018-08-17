'use strict';

var view1 = angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);

// view1.factory('callHandler', ['$http', function ($http) {
//   return {
//     getCompanies: function(searchKeyword) {
//       return $http.get('https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete', {
//         params: {
//           company_name: searchKeyword
//         }
//       }).success(function(response){
//         return response.searchResults;
//
//       });
//     }
//   }
//
// }]);

view1.controller('View1Ctrl', [
    '$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.selectedCompany = '';

  $scope.getCompanies = function(searchKeyword) {
    return $http.get('https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete', {
      params: {
        company_name: searchKeyword
      }
    }).then(function(response){
        return response.data.searchResults
    });
  };

  $scope.goToRoute = function (path) {
    console.log($scope.selectedCompany);
    $location.path(path);
  };
}]);
