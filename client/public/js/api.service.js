angular.module("app").
factory("Api", function ($http) {
	return {
		getFunds: function(){
			return $http.get('/api').then(function(response){
				return response.data;
			})
		}
	}
})

/*


  			
*/