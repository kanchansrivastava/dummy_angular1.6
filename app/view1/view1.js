'use strict';

var view1 = angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);


view1.controller('View1Ctrl', [
    '$scope', '$http', function($scope, $http) {
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
}]);
