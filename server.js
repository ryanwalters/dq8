'use strict';

var Boom = require('boom'),
    Hapi = require('hapi'),
    PG = require('pg'),
    Server = new Hapi.Server();

Server.connection({ port: process.env.PORT || 5000});

Server.start(function () {
    console.log('Server running at: ', Server.info.uri);
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
    path: '/app.js',
    handler: function (request, reply) {
        return reply.file('app.js');
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
 *      - ability_id[]
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
 * /character/ability/{ability_id}
 *      - character_ability_id
 *      - character_id
 *      - ability_id
 *      - points
 *      - level
 *      - target
 *      - tension
 *      - ability_info
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
    path: '/1/{listType}/{ids?}',
    handler: function (request, reply) {
        var query,
            listType = request.params.listType,
            ids = request.params.ids;

        switch (listType) {
            case 'ability':
                break;

            case 'character':
                query = 'SELECT character_id, character_name, character_image, ability_id FROM character';
                if (ids) query += ' WHERE character_id IN (' + ids + ')';
                break;

            case 'enemy':
                break;

            case 'item':
                query = 'SELECT item_id, item_name, item_type, item_image, equip, item_info, defence, bonus, buy, sell, recipe, area, drop, effect FROM item';
                if (ids) query += ' WHERE item_id = ' + ids;
                break;

            case 'recipe':
                break;

            case 'spell':
                break;

            default:
                return reply(Boom.badRequest());
        }

        query += ' ORDER BY ' + listType + '_name';

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
    }
});

Server.route({
    method: 'GET',
    path: '/1/character/ability/{characterId}',
    handler: function (request, reply) {
        PG.connect(process.env.DATABASE_URL, function (error, client, done) {
            var query = 'SELECT ability_type.*, character_ability.*, ability.* FROM ability_type JOIN ability USING (ability_type_id) JOIN character_ability USING (ability_id) WHERE character_id IN (' + request.params.characterId + ') ORDER BY character_ability.character_id ASC, ability.ability_type_id ASC, character_ability.points ASC';

            client.query(query, function (error, results) {
                done();
                if (error) {
                    console.error(error);
                    return reply(Boom.notFound());
                } else {
                    return reply(results.rows);
                }
            })
        })
    }
})