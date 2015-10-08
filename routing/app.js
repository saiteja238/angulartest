var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'a.html',

        })


    .state('filter', {
        url: "/filter",
        templateUrl: 'filters.html',

    })


    .state('index', {
        url: "/",
        templateUrl: "mainpage.html"
    })
     .state('msgchange', {
        url: "/msgchange",
        templateUrl: "msgchange.html"
    })
}]);