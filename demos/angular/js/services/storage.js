'use strict';

/**
 * Services that persists and retrieves items from localStorage
 */
myStuff.factory('itemStorage', function () {
	var STORAGE_ID = 'items-angularjs';

	return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (items) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(items));
		}
	};
});
