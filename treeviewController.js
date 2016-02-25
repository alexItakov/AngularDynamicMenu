 var myApp = angular.module('myApp', []); 

 myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) { 
 	console.log("Hello World from Treeviewcontroller.js"); 



 	$scope.items = [ 

 	// 1st global object
 	{
 		text: "Item A",
 		children: [
 		{
 			text: "Item A-1",
 			children: [
 			{
 				text: "Item A-1-1"
 			}, {
 				text: "Item A-1-2"
 			}
 			]
 		}, {
 			text: "Item A-2"
 		}, {
 			text: "Item A-3"
 		},
 		]
 	}, 

 	
// 2nd global object
{
	text: "Item B",
	children: [
	{ text: "Item B-1" },
	{ text: "Item B-2" },
	{
		text: "Item B-3",
		children: [
		{ text: "Item B-3-1" },
		{ text: "Item B-3-2" },
		]
	}
	]
},

 	// 3d global object
 	{
 		text: "Все что захочу то и будет моим объектом"
 	},


// 4th global object
{
	text: "Ну или еще один как ни крути!! =Ъ"
}



];





}]);
