'use strict';

var Hapi = require('hapi'),
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
 * /ability/{ability_id}
 *      - ability_id: sword, spear, fisticuffs, boomerang, courage, bow, staff, charisma, knives, whip, sex appeal, axe, club, scythe, humanity, magic
 *      - ability_type
 *      - ability_name
 *      - points[character_id][int]
 *      - level
 *      - target
 *      - tension
 *      - ability_info
 *
 */

Server.route({
    method: 'GET',
    path: '/1/{listType}/{id?}',
    handler: function (request, reply) {
        var query,
            listType = request.params.listType,
            id = request.params.id;

        switch (listType) {
            case 'ability':
                break;
            case 'character':
                break;
            case 'enemy':
                break;
            case 'item':
                query = 'SELECT item_id, item_name, item_type, item_image, equip, item_info, defence, bonus, buy, sell, recipe, area, drop, effect FROM item';
                break;
            case 'recipe':
                break;
            case 'spell':
                break;
            default:
                return reply(400, 'Bad Request');
        }

        if (id) query += ' WHERE ' + listType + '_id = ' + id;
        query += ' ORDER BY ' + listType + '_name';

        PG.connect(process.env.DATABASE_URL, function (error, client, done) {
            client.query(query, function (error, results) {
                done();
                if (error) {
                    console.error(error);
                    return reply(404, 'Not Found');
                } else {
                    return reply(results.rows);
                }
            });
        });
    }
});