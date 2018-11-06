# Woundly App

My first attempt at Redux!

### Resources
Base setup of Redux and dependencies from [here](https://github.com/StephenGrider/ReduxSimpleStarter), while styled components come from https://material-ui.com/


### Some background info

This app hits [this](https://github.com/asyi/wounds-demo-api) API, courtesy of [Swift Medical](https://github.com/swiftmedical/wounds-demo-api) which only runs locally. You'll also likely need to get a Chrome extension too allow CORS, such as [this](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi).

#### Running Woundly
You'll have to first run the Swift Medical API in order to make calls to it from Woundly. Then run Woundly like so:

```
> npm install
> npm start
```

Then navigate to http://localhost:8080
