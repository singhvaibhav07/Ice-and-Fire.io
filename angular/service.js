app.factory('gotServices',function service($http){

	var showData = {};
	var baseUrl = 'https://www.anapioficeandfire.com/api';

	//Show all books
	showData.gotBooks = function(){
		return $http({
			method : 'GET',
			url : baseUrl+'/books?page=1&pageSize=50'
		})
	}

	//Show detail of the books
	showData.bookDetail = function(item){
		return $http({
			method : 'GET',
			url : baseUrl+'/books/'+item
		})
	}

	showData.charDetail = function(pageNo){
		return $http({
			method : 'GET',
			url : baseUrl+'/characters?page='+pageNo+'&pageSize=50'
		})
	}

	showData.singleChar = function(item){
		return $http({
			method : 'GET',
			url : baseUrl+'/characters/'+item
		})
	}

	showData.singleHouse = function(houseItem){
		return $http({
			method : 'GET',
			url : baseUrl+'/houses/'+houseItem
		})
	}

	showData.houseDetail = function(page){
		return $http({
			method : 'GET',
			url : baseUrl+'/houses?page='+page+'&pageSize=50'
		})
	}

	return showData;
});

