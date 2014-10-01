angular.module('sortableListDirective', [])
  .controller('sortableController', ['$scope', function($scope) {
    $scope.sortableOptions = {
      update: function(e, ui) {
        if (ui.item.scope().item == "can't be moved") {
          ui.item.sortable.cancel();
        }
      },
      change: function(e, ui) {
        // console.log(ui.item); 
      }
    };
  }])
  .directive('sortableList', function() {
    return {
      controller: 'sortableController',
      restrict: 'E',
      link: function( scope, element, attrs ) {
        element.attr('role', 'list');
      }
    };
  })
  .directive('item', function() {
    return {
      restrict: 'E',
      link: function( scope, element, attrs ) {
        element.attr({
          'role': 'listitem',
          'tabIndex': '0'
        });
        scope.update = function(){
          
        }
      }
    };
  });
