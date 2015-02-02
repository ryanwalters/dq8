'use strict';

angular.module('Dragon', [

    // Application dependencies
    'ui.router',

    // Modules
    'Dragon.character'
])
    .config(['$stateProvider', '$locationProvider', function ($stateProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                controller: 'DragonCtrl',
                templateUrl: '/app/app.html',
                url: '/'
            });
    }]);