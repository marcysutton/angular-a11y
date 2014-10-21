scrollUI.directive('statusBar', ['$timeout', function ($timeout) {
  return {
    restrict: 'C',
    link: function( $scope, $element, $attrs ) {
      $scope.$on('statusbarmessage', function(scope, selectedAirportObj){
        var text = "Now everyone can hear this. <strong>Seattle to " + selectedAirportObj.label +".</strong>";
        $element.html(text);
        $element.removeClass('hiddenY');

        $timeout(function(){
          $element.addClass('hiddenY');
        }, 3000);
      });
    }
  }
}]);