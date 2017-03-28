var professoresModulo = angular.module('professoresModulo',[]);

professoresModulo.controller("professoresController", function ($scope) {
	$scope.professores = [
		{codigo: 1, nome: 'Glauter Santos', email: 'glauterlima@gmail.com', fone: '23234444'},
		{codigo: 2, nome: 'Raul Santos', email: 'raul@gmail.com', fone: '34567888'},
		{codigo: 3, nome: 'Rosimery Nascimento', email: 'rosinha@gmail.com', fone: '92255284'},
		{codigo: 4, nome: 'Lucia de Fatima', email: 'fatima@gmail.com', fone: '5653333'}
	];

	$scope.selecionaProfessor = function(professorSelecionado){
		$scope.professor = professorSelecionado;
	}

	$scope.limparCampos = function()
	{
		$scope.professor = "";
	}

	$scope.salvar = function(){
		$scope.professores.push($scope.professor);
		$scope.limparCampos();
	}

	$scope.excluir = function(){
		$scope.professores.splice($scope.professores.indexOf($scope.professor),1);
		$scope.limparCampos();
	}
	
	
});