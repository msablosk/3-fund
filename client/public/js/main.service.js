angular.module("app").
factory("Main", function () {
	var Main = {
  		principal: 1000,
  		percentVti: 0,
  		percentVxus: 0,
  		percentBnd: 0,
	}

	Main.setPercents= function(vti, vxus, bnd){
  			Main.percentVti = vti;
  			Main.percentVxus = vxus;
  			Main.percentBnd = bnd;
  	}

  	Main.setPrincipal = function(principal){
  		Main.principal = principal;
  	}

	
  			
	return Main;	
  	
	
})

/*


  			
*/