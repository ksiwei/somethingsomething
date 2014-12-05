'use strict';

console.log('bball popup and angular is :', angular);
/*
angular.module("FBApp", [])
	   .controlle("FBController", ["$scope", function() {

	   }]);
*/
/*
angular.element(document).ready(function() {
	console.log("finish boostrapping");
	angular.boostrap(document, ['FBApp']);
})*/

var FBApp = angular.module("FBApp", []);

FBApp.controller('FBController', function($scope) {
	console.log("bind controller");
	$scope.players = [
		"James Harden", "Kevin Love"
	]
});

