'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/details/company_name/:companyName', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$routeParams', function($scope, $routeParams) {
  $scope.companyName = $routeParams.companyName;
  $scope.companyId = $routeParams.companyId;

}]);