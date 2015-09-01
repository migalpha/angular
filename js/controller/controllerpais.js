apiApp.controller("apiAppCtrl",["$scope","$http", function($scope, $http){

	$scope.orden = false;
    $scope.campo = "name";
    $scope.region = "l Mundo";
    var url = "http://restcountries.eu/rest/v1/all";
    $http.get(url).success(function(respuesta){
        $scope.paises = respuesta;
	});
    $scope.buscaContinente = function (){
       $http.get($scope.ruta).success(function(respuesta){
       $scope.paises = respuesta;
       switch ($scope.ruta)
       {
            case 'http://restcountries.eu/rest/v1/region/africa':
                $scope.region = ' Africa';
                break;
            case 'http://restcountries.eu/rest/v1/region/americas':
                $scope.region = ' América'; 
                break; 
            case 'http://restcountries.eu/rest/v1/region/asia':
                $scope.region = ' Asia';
                break;
            case 'http://restcountries.eu/rest/v1/region/europe':
                $scope.region = ' Europa';
                break; 
            case 'http://restcountries.eu/rest/v1/region/oceania':
                $scope.region = ' Oceanía';
                break; 
            case 'http://restcountries.eu/rest/v1/all':
                $scope.region = 'l Mundo';
                break;
       }
       
        });
    }

}]);