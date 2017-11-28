app.directive("allBooks",function(){
	return{

		restrict : 'E',
		templateUrl : 'views/bookView.html',
		controller : function($scope){

		}
	}
})

app.directive("charDetail",function(){
	return{
		restrict : 'E',
		templateUrl : 'views/charDetails.html',
		controller : function($scope){

		}
	}
})

app.directive("houseDetail",function(){
	return{
		restrict : 'E',
		templateUrl : 'views/houseView.html',
		controller : function($scope){
			
		}
	}
})