
angular.module('Dragon.character', [])
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('dragon.character', {
                controller: 'CharacterCtrl',
                resolve: {
                    _character: ['$stateParams', 'CharacterFactory', function ($stateParams, CharacterFactory) {
                        return CharacterFactory.getCharacter($stateParams.characterName)
                            .then(function () {
                                return CharacterFactory.character;
                            });
                    }]
                },
                templateUrl: '/app/character/character.html',
                url: '^/character/:characterName'
            });
    }]);