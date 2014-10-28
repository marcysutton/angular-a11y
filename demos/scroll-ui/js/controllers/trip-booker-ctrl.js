scrollUI.controller('TripBookerCtrl', [
	'$scope',
	function ($scope) {
		$scope.airportSelected = function(airport) {
			console.log(airport.label);

			$scope.airportIsSelected = true;

			$scope.selectedAirport = airport;      
		};
}]);

