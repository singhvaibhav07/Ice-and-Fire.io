app.controller('bookController',['$http','gotServices',function($http,gotServices){
	var main = this;
	this.gotBookData = [];
	this.bookData = [];

	//Calling function
	this.allBook = function(){
		gotServices.gotBooks()
		.then(function successCallback(response){
					
			main.gotBookData.push.apply(main.gotBookData,response.data);
			//console.log(response.data);

		},function errorCallback(response){
			alert("some error in getting get");
		}
		)
	}

	this.orderByField = 'name','released';
	this.reverseSort = false;
}]);


