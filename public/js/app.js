angular.module('app', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');


        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: './views/login.html',
            })
            .state('home', {
                url: '/home',
                templateUrl: './views/home.html',
            })

    })
