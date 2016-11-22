angular.module("app").
factory("Main", function () {
	var Main = {
  		principal: 10000,
      commission: 10,
  		percentVti: 50,
  		percentVxus: 20,
  		percentBnd: 30,
      cashVti: 0,
      cashVxus: 0,
      cashBnd: 0,
	}

	Main.setPercents = function(vti, vxus, bnd){
  			Main.percentVti = vti;
  			Main.percentVxus = vxus;
  			Main.percentBnd = bnd;
  }

  Main.setCash = function(vti, vxus, bnd, principal){
        Main.cashVti = principal * (vti / 100);
        Main.cashVxus = principal * (vxus / 100);
        Main.cashBnd = principal * (bnd / 100);
  }

	Main.setPrincipal = function(principal){
		Main.principal = principal;
	}

  Main.setCommission = function(commission){
    Main.commission = commission;
  }

	
  			
	return Main;	
  	
	
})

/*


  			
*/