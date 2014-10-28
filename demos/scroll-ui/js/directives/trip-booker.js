scrollUI.directive('tripBooker', function () {
  return {
    restrict: 'C',
    link: function( $scope, $element, $attrs ) {
      $scope.$watch('airportIsSelected', function(newValue){
        if(newValue){
          $scope.pickerIsVisible = true;

          var peoplePicker = $('#people-picker');
          
          $('html,body').animate({
            scrollTop: peoplePicker.offset().top
          }, 600);

          peoplePicker.find('.pp-number').first().focus();

          $scope.$emit('statusUpdate', $scope.selectedAirport);

          $scope.airportIsSelected = false;
        }
      });
    }
  }
});