angular.module("app").
factory("Api", function ($http) {
	return $http.get('/api');
})

/*


  			
*/