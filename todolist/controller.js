var app = angular.module("toDoList",["LocalStorageModule"]);

app.controller("toDoController", function($scope, localStorageService){

		if(localStorageService.get("angular-actividades")){
			$scope.todo = localStorageService.get("angular-actividades");
		}else{

			$scope.todo = [];
		};
		
		$scope.nAct = {};

		/*
			{
	
				actividad : " terminar aplicacion",
				fecha : "03/03/2015 3:00 pm"
			}

		*/
		$scope.$watchCollection('todo',function(newValue,oldValue){

			localStorageService.set("angular-actividades", $scope.todo);
		});

		$scope.addActividad = function(){
			$scope.todo.push($scope.nAct);
			$scope.nAct = [];
			
		};

		$scope.limpiar = function(){
			$scope.todo = [];
		};
});