var app = angular.module("Blog",[]);

app.controller("BlogController", function($scope, $http){
	$scope.wait = "Cargando, espere ..."
	$scope.posts = [];
	$scope.newPost = {};
	$http.get("http://jsonplaceholder.typicode.com/posts/")
	.success(function(data){
		console.log(data)
		$scope.posts = data;
		$scope.wait = "";
	}).error(function(err){

	});

	$scope.addPost = function(){
		$scope.wait= "Registrando post, espere ..."
		$http.post("http://jsonplaceholder.typicode.com/posts",{
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
		.success(function(data, status, headers,config){
			$scope.posts.push(data);
			$scope.newPost = {};
			$scope.wait = "";
		}).error(function(error, status, headers,config){
			console.log(error);
		});
	}
});