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
            .state('dragon', {
                controller: 'DragonCtrl',
                resolve: {
                    _characters: ['CharacterFactory', function (CharacterFactory) {
                        return CharacterFactory.getCharacters()
                            .then(function () {
                                return CharacterFactory.characters;
                            });
                    }]
                },
                templateUrl: '/app/app.html',
                url: '/'
            });
    }]);