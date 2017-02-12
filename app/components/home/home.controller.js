/**
 * Created by ducthang on 2/12/17.
 */

angular.module('myApp').controller("HomeController", ['$scope', '$state', 'BikeService', function ($scope, $state, BikeService) {
    $scope.bikes = [];

    BikeService.list(function (response) {
        $scope.bikes = response;
    });

}]);
