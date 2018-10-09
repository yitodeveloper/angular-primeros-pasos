var app = angular.module("Calculadora",[]);

app.controller("CalcController", function($scope){
	$scope.nombre = "Rodrigo";
	$scope.apellido = "Ramirez";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario : "Es la mejor aplicacion del mundo",
			usuario : "Walter Carmelo" 
		},
		{
			comentario : "creo que podria mejorar",
			usuario : "Pedrito Perez" 
		}
	];

	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	};

});