# ReduxSimpleStarter (with Sass Support)

This project is heavily based on the [ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter) repo by the excellent Stephen Grider of [Udemy](https://www.udemy.com/user/sgslo/) fame.

###Getting Started###

Checkout this repo, install dependencies, then start the webpack process with the following:

```
	> git clone https://github.com/scottvrable/ReduxSimpleStarter
	> cd ReduxSimpleStarter
	> npm install
	> npm start
```

Unlike the original version of this project, this verison supports Sass (with source maps) through a overly opinioned set up. (I also did some obnoxious stuff like switching spaces to tabs and single-quotes to double-quotes.)

Each subdirectory in the `src/styles` folder (except for `lib`) contains a `_main.scss` partial. These `_main.scss` files should import the other partials in their respective directories. Then, `style.scss` imports all the `_main.scss` files. All of this is outputted to style.css in the root directory which is what will be read by the browser in a live app.

## When Deploying to Heroku...

In `package.json`, change

```
	"scripts": {
	  "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
	  "test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js --recursive ./test",
	  "test:watch": "npm run test -- --watch",
	  "postinstall": "webpack -p"
	},
``` 

to

```
	"scripts": {
	  "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
	  "test": "mocha --compilers js:babel-core/register --require ./test/test_helper.js --recursive ./test",
	  "test:watch": "npm run test -- --watch",
	  "postinstall": "webpack -p",
	  "start": "node server.js"
	},
```
