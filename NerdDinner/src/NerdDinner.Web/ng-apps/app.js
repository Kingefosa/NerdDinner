﻿(function () {
    'use strict';

    config.$inject = ['$routeProvider', '$locationProvider'];

    angular.module('nerdDinner', [
        'ngRoute', 'ui.bootstrap', 'dinnersService'
    ]).config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/views/list.html',
                controller: 'DinnersListController'
            })
            .when('/dinners/:id', {
                templateUrl: '/views/detail.html',
                controller: 'DinnersDetailController'
            })
            .when('/dinners/add', {
                templateUrl: '/views/add.html',
                controller: 'DinnersAddController'
            })
            .when('/dinners/edit/:id', {
                templateUrl: '/views/edit.html',
                controller: 'DinnersEditController'
            })
            .when('/dinners/delete/:id', {
                templateUrl: '/views/delete.html',
                controller: 'DinnersDeleteController'
            })
            .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
    }
})();