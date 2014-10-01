var pageControllers = angular.module('pageControllers', []);

pageControllers.controller('FavoriteMoviesCtrl', ['$scope', '$routeParams',
  function ($scope) {
  	$scope.movieList = ["Death Proof", "The Fifth Element", "PeeWee's Big Adventure", "Brazil", "Alice in Wonderland", "Hackers"];
  	// Todo: enable arrow key sorting
}]);

pageControllers.controller('BucketListCtrl', ['$scope', '$routeParams', 'itemStorage',
  function($scope, $routeParams, itemStorage) {
		$scope.bucketList = [
			{"title": "Cycling in Europe"},
			{"title": "Moab Exploring"},
			{"title": "Speaking at Webstock"},
			{"title": "Snowboarding in Japan"}, 
			{"title": "Alaska summer solstice"}];

		// Todo: merge initial data with added items
		itemStorage.put($scope.bucketList);

    var items = $scope.items = itemStorage.get();

		$scope.newItem = '';

		$scope.$watch('items', function (newValue, oldValue) {
			if (newValue !== oldValue) { // This prevents unneeded calls to the local storage
				itemStorage.put(newValue);
			}
		}, true);

		$scope.addItem = function () {
			var newItem = $scope.newItem.trim();
			if (!newItem.length) {
				return;
			}

			items.push({
				title: newItem
			});

			$scope.newItem = '';
		};

		$scope.removeItem = function (item) {
			items.splice(items.indexOf(item), 1);
		};
  }]);

pageControllers.controller('AboutCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    
  }]);