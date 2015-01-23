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
 *      - ability_id[]
 *
 * /item/{item_id}
 *      - item_id
 *      - item_type[]: body, head, shield, accessory, weapon, ingredient, cheese
 *      - item_name
 *      - image
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
    path: '/1/{list_type}',
    handler: function (request, reply) {
        // do postgres stuff
    }
});

Server.route({
    method: 'GET',
    path: '/1/{list_type}/{id}',
    handler: function (request, reply) {
        // do postgres stuff
    }
});