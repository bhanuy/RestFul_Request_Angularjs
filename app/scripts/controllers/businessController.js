app.controller('businessCtrl',['$scope','businessFactory',function($scope, businessFactory) {
	$scope.showResult =0;
	$scope.businessId;


	$scope.search = function(id){
		businessFactory.getResult(id).then(function successCallback(response) {	
			$scope.businessDetails = response.data['results'][0];
			$scope.showResult =1;		
	  	}, function errorCallback(response) {
	  		$scope.showResult =2;		
	  	});
	};

}]);