app.controller('houseController',['$http','gotServices',function($http,gotServices){
	var main = this;
	this.allHouse = [];

	this.gotHouse = function(){
		for(var i=1;i<50;i++){
			gotServices.houseDetail(i)
			.then(function successCallback(response){
				main.allHouse.push.apply(main.allHouse,response.data);
				//console.log(main.allHouse);
			},function errorCallback(response){
				alert("Some Problem Occured");
			}
			)
		}
	}
	this.gotHouse();

	this.orderByField = 'name','region';
	this.reverseSort = false;
}])