# Heroku "NAHP" Stack Boilerplate

Basic "Hello world!" application for (free on) the Heroku platform. This guide assumes you have the CLI tools installed
to work with Heroku, namely the [Heroku Toolbelt](https://toolbelt.heroku.com/), [node](http://nodejs.org/download/),
and [git](http://git-scm.com/downloads).

This app will combine your Angular app into a single, minified file along with a source map to allow for debugging.

## Inside your "napsack"

- Node.js
- Angular
- Hapi
- Postgres

## Setup

1. `git clone https://github.com/ryanwalters/heroku-boilerplate.git <appname>`
2. `cd <appname>`
3. `heroku create <appname>`
4. `heroku addons:add heroku-postgresql`
5. `git push heroku master`

## Run locally

1. Get the environment variable from the following command `heroku config:get DATABASE_URL` and place it in `.env`
2. `npm install`
2. `gulp watch`
3. `foreman start web`

## Guidelines

- Angular module setters must begin with an underscore (_app.js)