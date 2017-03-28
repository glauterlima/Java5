var cursoModulo = angular.module('cursoModulo',[]);

cursoModulo.controller("cursoController", function ($scope) {
	$scope.professores = [
		{codigo: 1, nome: 'Glauter Santos', email: 'glauterlima@gmail.com', fone: '23234444'},
		{codigo: 2, nome: 'Raul Santos', email: 'raul@gmail.com', fone: '34567888'},
		{codigo: 3, nome: 'Rosimery Nascimento', email: 'rosinha@gmail.com', fone: '92255284'},
		{codigo: 4, nome: 'Lucia de Fatima', email: 'fatima@gmail.com', fone: '5653333'}
	];

	$scope.cursos = [
		{codigo: 1, nome: 'Java para Web', diashorarios: 'Segundas e Quartas, 19 hrs', professor:{codigo: 1, nome: 'Glauter Santos', email: 'glauterlima@gmail.com', fone: '23234444'}},
		{codigo: 2, nome: 'Delphi', diashorarios: 'Terças e Quintas, 20 hrs',  professor:{codigo: 2, nome: 'Raul Santos', email: 'raul@gmail.com', fone: '34567888'}},
		{codigo: 3, nome: 'PHP', diashorarios: 'Sábados, 9 hrs', professor:{codigo: 3, nome: 'Rosimery Nascimento', email: 'rosinha@gmail.com', fone: '92255284'}},
		{codigo: 4, nome: 'Arduino', diashorarios: 'Sextas, 22 hrs', professor:{codigo: 4, nome: 'Lucia de Fatima', email: 'fatima@gmail.com', fone: '5653333'}}
	];

	$scope.selecionaCurso = function(cursoSelecionado){
		$scope.curso = cursoSelecionado;
	}

	$scope.limparCampos = function()
	{
		$scope.curso = "";
	}

	$scope.salvar = function(){
		$scope.cursos.push($scope.curso);
		$scope.limparCampos();
	}

	$scope.excluir = function(){
		$scope.cursos.splice($scope.cursos.indexOf($scope.curso),1);
		$scope.limparCampos();
	}
	
	
});