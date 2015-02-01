'use strict';

var Boom = require('boom'),
    Handlebars = require('handlebars'),
    Hapi = require('hapi'),
    Path = require('path'),
    PG = require('pg'),
    Server = new Hapi.Server();

Server.connection({ port: process.env.PORT || 5000});

Server.start(function () {
    console.log('Server running at: ', Server.info.uri);
});

Server.views({
    engines: {
        html: Handlebars
    },
    path: Path.join(__dirname, 'app')
});

Server.route({
    method: 'GET',
    path: '/{param*}',
    handler: function (request, reply) {
        return reply.file('index.html');
    }
});

Server.route({
    method: 'GET',
    path: '/dist/{param*}',
    handler: {
        directory: {
            path: 'dist'
        }
    }
});

Server.route({
    method: 'GET',
    path: '/app/{param*}',
    handler: {
        directory: {
            path: 'app'
        }
    }
});

/**
 * api paths and data structures
 *
 * /character/{character_id}
 *      - character_id
 *      - character_name
 *      - character_image
 *
 * /item/{item_id}
 *      - item_id
 *      - item_name
 *      - item_type[]: body, head, shield, accessory, weapon, ingredient, cheese
 *      - item_image
 *      - equip[]: hero, yangus, jessica, angelo
 *      - item_info
 *      - defence
 *      - bonus[]
 *      - buy
 *      - sell
 *      - recipe[]: join with recipe table on {item_id}?
 *      - area[]
 *      - drop[]
 *      - effect
 *
 * /recipe/{recipe_id}
 *      - recipe_id
 *      - recipe_name
 *      - item_id
 *      - recipe[]
 *
 * /enemy/{enemy_id}
 *      - todo: create data structure
 *
 * /spell/{spell_id}
 *      - todo: create data structure
 *
 *
 * /character/{characterId}
 *
 *  table: character_ability
 *      - character_ability_id
 *      - character_id
 *      - ability_id
 *      - points
 *      - level
 *      - target
 *      - tension
 *      - ability_info
 *
 * table: character_ability_type
 *      - character_ability_type_id
 *      - character_id
 *      - ability_type_id
 *
 * table: ability
 *      - ability_id
 *      - ability_name
 *      - ability_type_id
 *
 * table: ability_type
 *      - ability_type_id
 *      - ability_type_name
 *
 */

Server.route({
    method: 'GET',
    path: '/v1/character/{characterId?}',
    handler: function (request, reply) {
        var query = request.params.characterId ?

                // If characterId is present, select that character and all of their ability data

                'SELECT \
                    character.*, \
                    json_agg(ability_type_row) AS ability_types \
                FROM character \
                JOIN character_ability_type USING (character_id) \
                JOIN ( \
                    SELECT \
                        ability_type.*, \
                        json_agg(ability_row) AS abilities \
                    FROM ability_type \
                    JOIN ( \
                        SELECT \
                            ability.*, \
                            character_ability.* \
                        FROM ability \
                        JOIN character_ability USING (ability_id) \
                        WHERE character_ability.character_id = ' + request.params.characterId + '\
                        ORDER BY \
                            character_ability.points DESC \
                    ) ability_row ON (ability_row.ability_type_id = ability_type.ability_type_id) \
                    GROUP BY \
                        ability_type.ability_type_id \
                    ORDER BY \
                        ability_type.ability_type_id ASC \
                ) ability_type_row ON (ability_type_row.ability_type_id = character_ability_type.ability_type_id) \
                WHERE character_id = ' + request.params.characterId + ' \
                GROUP BY \
                    character.character_id' :

                // Otherwise, get list of available characters

                'SELECT character.* FROM character ORDER BY character_id';

        _query(query, reply);
    }
});

var _query = function (query, reply) {
    PG.connect(process.env.DATABASE_URL, function (error, client, done) {
        client.query(query, function (error, results) {
            done();
            if (error) {
                console.error(error);
                return reply(Boom.notFound());
            } else {
                return reply(results.rows);
            }
        });
    });
};