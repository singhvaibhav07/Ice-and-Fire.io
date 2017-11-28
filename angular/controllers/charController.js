app.controller('charController',['$http','$routeParams','gotServices',function($http,$routeParams,gotServices){
	var main = this;
	this.allChar = [];

	this.charactersDetail = function(){
		for(var i=1;i<50;i++){
		gotServices.charDetail(i)
		.then(function successCallback(response){
			main.allChar.push.apply(main.allChar,response.data);
			//console.log(main.allChar);

		},function errorCallback(response){
			alert("Some Problem Occured");
		})
	}}

	this.orderByField = 'name','culture';
	this.reverseSort = false;
}]);


