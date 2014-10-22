'use strict';

var scrollUI = angular.module('scroll-ui', []);

scrollUI.controller('appController', ['$scope', '$location',
	function($scope, $location){    

    $scope.tripTypes = [{
      value: 'round-trip', 
      label: 'Round Trip'
    },{
      value: 'one-way',
      label: 'One Way'
    },{
      value: 'multi-city',
      label: 'Multi City'
    }];

    $scope.openDeparting = function(){
      alert('Sorry! You can only depart from Seattle.');
    };

    $scope.airportList = [{
      label: 'Seattle',
      code: 'SEA',
    },{
      label: 'Las Vegas',
      code: 'LAS'
    },{
      label: 'Los Angeles',
      code: 'LAX'
    },{
      label: 'San Diego',
      code: 'SAN'
    },{
      label: 'San Francisco',
      code: 'SFO'
    },{
      label: 'Washington DC/IAD',
      code: 'IAD'
    },{
      label: 'All Cities'
    }];

    $scope.pickerIsVisible = false;
    $scope.peopleList = ['Adults', 'Children', 'Lap Infants', 'Pets'];

    $scope.footerLinkNames = [
      'Sitemap', 'Contact Us', 'Accessibility', 'Help', 'Blog', 'Unsubscribe'
    ]
}]);