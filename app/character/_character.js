
angular.module('Dragon.character', [])
    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('character', {
                controller: 'CharacterCtrl',
                templateUrl: '/app/character/character.html',
                url: '/character'
            });
    }]);