
angular.module('Dragon')
    .controller('DragonCtrl', ['$scope', 'CharacterFactory', function ($scope, CharacterFactory) {
        $scope.characters = CharacterFactory.characters;
    }]);