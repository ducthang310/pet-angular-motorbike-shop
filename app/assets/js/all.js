'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ui.bootstrap'
]);
/**
 * Descriptions: The app.route.js file will handle all the routes and the route configuration. After that we have two subfolders – components and shared
 */
angular.module('myApp').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'components/home/home.index.html',
            controller: 'HomeController'
        })

        .otherwise({
            redirectTo: '/'
        });

});
/**
 * Created by ducthang on 2/12/17.
 */

angular.module('myApp').controller("HomeController", ['$scope', function ($scope) {
    $scope.text = "Hello, World";
}]);
