/**
 * Created by ducthang on 2/12/17.
 */

angular.module('myApp').controller("MenuController", ['$scope', '$state', 'BikeService', function ($scope, $state, BikeService) {
    $scope.categories = [];

    BikeService.categories(function (response) {
        $scope.categories = response;
    });

    $scope.checkCurrentCategory = function (cat_id) {
        return ($state.params.categoryId == cat_id) ? 'active' : '';
    };

    $scope.getCategoryLink = function (cat_id) {
        return $state.href('bike_list', {categoryId: cat_id});
    };
}]);
