/**
 * Created by ducthang on 2/12/17.
 */

angular.module('myApp').factory('BikeService', ['$http', function ($http) {

    var list = function (successCallback, errorCallback) {
        return $http
            .post('data/bikes.json')
            .then(function (response) {
                successCallback(response.data);
                return response;
            }, function (response) {
                errorCallback(response.data);
                return response;
            });
    };


    var categories = function (successCallback, errorCallback) {
        return $http
            .post('data/categories.json')
            .then(function (response) {
                successCallback(response.data);
                return response;
            }, function (response) {
                errorCallback(response.data);
                return response;
            });
    };


    return {
        list: list,
        categories: categories
    };
}]);

