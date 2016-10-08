(function () {
	'use strict';
	
	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.message = "";
		$scope.dishes = "";

		$scope.checkTooMuch = function() {
			var num = numberOfDishes($scope.dishes);
			$scope.message = showMessage(num);
			$scope.cssClass = cssClass(num);
		};

		function numberOfDishes(dishes) {
			var splits = dishes.split(",").filter(function(s) {
				return s.length > 0;
			});
			return splits.length;
		}

		function showMessage(num) {
			var message = "";
			if (num > 0 && num <= 3) {
				message = "Enjoy!";
			} else if (num > 3) {
				message = "Too much!"
			} else {
				message = "Please enter data first";
			}
			return message;
		}

		function cssClass(num) {
			return num > 0 ? "valid" : "invalid";
		}
	}

})();