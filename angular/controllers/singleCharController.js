app.controller('singleCharController',['$http','$routeParams','gotServices',function($http,$routeParams,gotServices){
	var main = this;
	this.charId = $routeParams.id2;
	//console.log(this.charId);
	this.sinChar = [];

	this.getSinChar = function(){
		gotServices.singleChar(main.charId)
		.then(function successCallback(response){
			main.sinChar.push(response.data);
			//console.log(main.sinChar);
		},function errorCallback(response){
			alert("Some Problem Occured");
		}
		)
	}
}]);