app.controller('singleHouse',['$http','$routeParams','gotServices',function($http,$routeParams,gotServices){
	var main = this;
	this.houseId = $routeParams.id3;
	console.log(this.houseId);
	this.singleHou = [];

	this.sinHouse = function(){
		gotServices.singleHouse(main.houseId)
		.then(function successCallback(response){
			main.singleHou.push(response.data);
			//console.log(main.singleHou);
		},function errorCallback(response){
			alert("Some Problem Occured");
		}
		)
	}
}])