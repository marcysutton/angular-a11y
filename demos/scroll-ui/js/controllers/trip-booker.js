scrollUI.controller('TripBookerCtrl', [
	'$scope',
	'$element',
	'$rootScope',
	function ($scope, $element, $rootScope) {
		var self = this;

		$scope.airportSelected = function(airport) {
			console.log(airport.label);

			$scope.airportIsSelected = true;

			self.selectedAirport = airport;
		};

		$scope.$watch('airportIsSelected', function(newValue){
			if(newValue){
				$scope.pickerIsVisible = true;
				var peoplePicker = $('#people-picker');

				$rootScope.$broadcast('statusbarmessage', self.selectedAirport);
				
				$('html,body').animate({
          scrollTop: peoplePicker.offset().top
        }, 600);

				peoplePicker.find('.pp-number').first().focus();

				$scope.airportIsSelected = false;
			}
		});
}]);

