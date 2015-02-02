
angular.module('Dragon.character')
    .controller('CharacterCtrl', ['$scope', 'CharacterFactory', function ($scope, CharacterFactory) {
        $scope.character = CharacterFactory.character;
        console.log($scope.character);
    }]);