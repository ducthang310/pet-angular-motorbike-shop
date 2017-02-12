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
