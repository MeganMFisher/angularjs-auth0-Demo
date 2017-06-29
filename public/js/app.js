angular.module('app', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');


        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: './views/login.html',
            })
            .state('home', {
                url: '/',
                templateUrl: './views/home.html',
            })

    })
