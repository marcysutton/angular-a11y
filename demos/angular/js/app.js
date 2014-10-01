'use strict';

var myStuff = angular.module('my-stuff', ['ngRoute', 'ui.sortable', 'pageControllers', 'sortableListDirective', 'navLinkDirective']);

myStuff.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/favorite-movies', {
        templateUrl: 'partials/page-favorite-movies.html',
        controller: 'FavoriteMoviesCtrl'
      }).
      when('/bucket-list', {
        templateUrl: 'partials/page-bucket-list.html',
        controller: 'BucketListCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/page-about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
      	templateUrl: 'partials/page-home.html',
        redirectTo: '/'
      });
  }])
.controller('appController', ['$rootScope', '$scope', '$location', '$route',
	function($rootScope, $scope, $location, $route){    
		$scope.checkPath = function(path) {
			return $location.path().substr(0, path.length) == path;
		}	
		$scope.getClass = function(path) {
	    if ($scope.checkPath(path)) {
	      return "active"
	    } else {
	      return ""
	    }
		}
}]);