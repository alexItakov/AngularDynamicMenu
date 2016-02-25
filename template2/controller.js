
var myApp = angular.module('myApp', []); 

angular.module("myApp", []).controller("TreeController", ['$scope', function($scope) {
	$scope.delete = function(data) {
		data.nodes = [];
	};

	$scope.add = function(data) {
		
		
		
		var post = data.nodes.length +1;
		var newName = "nodeName";
		//data.name + '-' + post;


		data.nodes.push({name: newName,nodes: []});
		console.log($scope.nodeName);
	};
	$scope.tree = [{name: "node", nodes: []}];
}]); 