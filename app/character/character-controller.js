
angular.module('Dragon.character')
    .controller('CharacterCtrl', ['$scope', function ($scope) {
        $scope.characters = 'Characters will go here';
        console.log('character loading');
    }]);