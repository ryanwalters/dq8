
angular.module('Dragon.character')
    .factory('CharacterFactory', ['$http', '$q', function ($http, $q) {
        return {

            /* --- Character API --- */

            character: null,
            characters: null,

            getCharacter: function (characterName) {
                var self = this;
                return self.character && self.character.character_name === characterName ?
                    $q.when(self.character) :
                    $http.get('/v1/character/' + characterName)
                        .success(function (characterData) {
                            self.character = characterData[0];
                        });
            },

            getCharacters: function () {
                var self = this;
                return self.characters ?
                    $q.when(self.characters) :
                    $http.get('/v1/character')
                        .success(function (charactersData) {
                            self.characters = charactersData;
                        });
            }
        };
    }]);