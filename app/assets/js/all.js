'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ui.router',
    'ui.bootstrap'
]);
/**
 * Descriptions: The app.route.js file will handle all the routes and the route configuration. After that we have two subfolders – components and shared
 */
angular.module('myApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'components/home/home.index.html',
            controller: 'HomeController'
        })
        .state('bike_list', {
            url: '/bike/list/:categoryId',
            templateUrl: 'components/bike/bike.list.html',
            controller: 'BikeListController'
        })
        .state('bike_detail', {
            url: '/bike/view/:bikeId',
            templateUrl: 'components/bike/bike.detail.html',
            controller: 'BikeDetailController'
        });

    $urlRouterProvider.otherwise('/');

}]);

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


/**
 * Created by ducthang on 2/12/17.
 */

angular.module('myApp').controller("HomeController", ['$scope', '$state', 'BikeService', function ($scope, $state, BikeService) {
    $scope.bikes = [];

    BikeService.list(function (response) {
        $scope.bikes = response;
    });

}]);

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
