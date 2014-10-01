angular.module('navLinkDirective', [])
  .controller('navLinkController', ['$scope', '$location', function($scope, $location) {

  }])
  .directive('navLink', ['$location', function($location) {
    return {
      controller: 'navLinkController',
      restrict: 'A',
      link: function( $scope, $element, $attrs ) {
        var href;
        $scope.$on('$viewContentLoaded', function(){
          $scope.path = $location.path();
          href = $element.attr('href').split('#')[1];
          if($scope.path == href){
            var $el = $('.'+href.split('/')[1]);
            $el.focus();
          }
        });
      }
    };
  }]);