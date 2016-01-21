app.factory('businessFactory',['$http',function($http) {

	var businessResult = {};
    var urlPath = "http://avoindata.prh.fi:80/bis/v1/";

    //get info of specified business id
    businessResult.getResult = function (id) {
        return $http.get(urlPath+ id);
    };

    return businessResult;

}]);