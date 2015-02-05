# Sample Heroku node.js application

Basic "Hello world!" application for (free on) the Heroku platform. This guide assumes you have the CLI tools installed
to work with Heroku, namely the [Heroku Toolbelt](https://toolbelt.heroku.com/), [node](http://nodejs.org/download/),
and [git](http://git-scm.com/downloads).

## Neat things this sample app does

- Automatically installs git hooks (i.e. to lint your code before committing)
- Watches source files for changes and automatically preps them for production
    - Bundles and minifies your Angular app into a single file, which includes a source map for easy debugging
    - Compiles your .scss files into a single .css file
- Heroku-specific: Ignores source files and only deploys production-ready files
- Angular-specific: "caches" API calls to prevent unnecessary database calls

## To run locally

1. Copy the environment variable from the following command `heroku config:get DATABASE_URL | clip` and place it in `.env`
2. `npm install`
2. `gulp watch`
3. `foreman start web`

## Guidelines

- Angular module setters must begin with an underscore (_app.js)