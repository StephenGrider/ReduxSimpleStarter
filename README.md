# ReduxSimpleStarterRefreshed

This fork contains the following updates as of 3/28/2018:
- Upgraded to React 16.
- Upgraded to React-Redux 5.
- Upgraded to Webpack 4.
- Changed babel preset to 'env': https://www.npmjs.com/package/babel-preset-env 
- Moved from using Mocha/Chai to Jest/Enzyme. Demo test is within src/components/.
- Package control using Yarn instead of NPM.
- Added support for JS object rest spread (...destructuring) and class properties.

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then:

```
> git clone https://github.com/andresn/ReduxSimpleStarterRefreshed.git
> cd ReduxSimpleStarterRefreshed
> yarn install
> yarn start
```

#### Not Familiar with Git?
Click [here](https://github.com/andresn/ReduxSimpleStarterRefreshed/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> yarn install
> yarn start
```

#### To Run Tests
This repo uses Jest and Enzyme for testing. Here's a great video intro: https://www.youtube.com/watch?v=aSQ8v9JH5C8

```
> yarn test
> yarn test:watch # tests will run as you make modifications
```
