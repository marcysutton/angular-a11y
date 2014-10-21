scrollUI.controller('TripBookerCtrl', [
	'$scope',
	'$element',
	'$rootScope',
	function ($scope, $element, $rootScope) {
		var self = this;

		self.element = $element;
		
		$scope.airportSelected = function(airport) {
			console.log(airport.label);

			$scope.airportIsSelected = true;

			self.selectedAirport = airport;
		};

		$scope.$watch('airportIsSelected', function(newValue){
			if(newValue === true){
				$scope.pickerIsVisible = true;
				var peoplePicker = document.querySelector('#people-picker');

				$rootScope.$broadcast('statusbarmessage', self.selectedAirport);

				setTimeout(function () {
					window.scrollTo(0, peoplePicker.offsetTop - 100);

					setTimeout(function(){
						peoplePicker.querySelectorAll('.pp-number')[0].focus();
					})
				}, 300);
			}
		});
}]);

