/**
 * Created by ducthang on 2/12/17.
 */

angular.module('myApp').controller("BikeListController", ['$scope', '$state', 'BikeService', function ($scope, $state, BikeService) {
    $scope.bikes = [];
    $scope.categories = [];
    
    BikeService.list(function (response) {
        $scope.bikes = response;
    });

    BikeService.categories(function (response) {
        $scope.categories = response;
    });

    $scope.categoryFilterFn = function (bike) {
        return $state.params.categoryId == null ||
            (-1 < bike.categories.indexOf(Number($state.params.categoryId)));
    }

}]);


angular.module('myApp').controller("BikeDetailController", ['$scope', '$state', 'BikeService', function ($scope, $state, BikeService) {
    $scope.bike = null;
    $scope.bikes = [];

    BikeService.list(function (response) {
        $scope.bikes = response;
        for(var i = 0; i < $scope.bikes.length; i++) {
            if ($scope.bikes[i].id == $state.params.bikeId) {
                $scope.bike = $scope.bikes[i];
            }
        }
    });

}]);