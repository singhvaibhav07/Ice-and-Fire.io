app.controller('bookViewController',['$http','$routeParams','gotServices',function($http,$routeParams,gotServices){
	var main = this;
	this.bookId = $routeParams.id1;
	//console.log(this.bookId);
	this.bookData = [];


	this.getBooks = function(){
		gotServices.bookDetail(main.bookId)
		.then(function successCallback(response){
			main.bookData.push(response.data);
			
		})
	}
}])