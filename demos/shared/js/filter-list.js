angular.module('a11yApp', [])
  .controller('a11yController', function($scope, $rootScope, $location, $window) {
    $scope.dataModel = [{
      "name" : "Marcy",
      "bio" : "Developer at Substantial, Girl Develop It Seattle Co-Chair"
    },{
      "name" : "Erik",
      "bio" : "Man of leisure, formerly at Amazon. Looking for something great."
    },{
      "name" : "Wally",
      "bio" : "Chaser of squirrels, tree-climber extraordinaire"
    },{
      "name" : "Terd Ferguson",
      "bio" : "Best nickname ever"
    }];
  })
  .directive('resultList', [function(){
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        $scope.$watch('filtered.length', function(length){
          if($scope.numItems !== undefined){
            if(length < $scope.numItems){
              // if we're removing items
              console.log('removing items: '+length);
              $scope.relevant = 'removals';
            }
            else if(length > $scope.numItems){
              console.log('adding items: '+length);
              $scope.relevant = 'additions';
            }
          }
          $scope.numItems = length;
        });
      }
    }
  }]);