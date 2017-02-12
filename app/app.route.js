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