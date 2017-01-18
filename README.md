# React Template

This is a React Template to get you up and running with the following
stack quickly:

### Tech stack (React)
* [react](https://facebook.github.io/react/), component based UI library
* [react-hot-loader](http://gaearon.github.io/react-hot-loader/), tweak React components in real time
* [react-router](https://github.com/ReactTraining/react-router), keep UI in sync with the URL
* [material-ui](http://www.material-ui.com/), React components that implement Google's Material Design
* [react-intl](https://github.com/yahoo/react-intl), internationalisation support (**TODO**)
* etc...

### Tech stack (Redux)
* [redux](http://redux.js.org/), predictable container for app state
* [redux-thunk](https://github.com/gaearon/redux-thunk), async support for redux actions
* [redux-api](https://github.com/lexich/redux-api), store REST API responses and status in redux
* [react-router-redux](https://github.com/reactjs/react-router-redux), sync browser history with redux
* [redux-act](https://github.com/pauldijou/redux-act), use actions themselves as references inside reducers
* [redux-auth-wrapper](https://github.com/mjrussell/redux-auth-wrapper), higher order component for handling authentication
* etc...

### Tools
* [babel](https://babeljs.io/), transpile ES6 and React's JSX syntax into ES5
* [webpack](https://webpack.github.io/), bundle everything together
* [eslint](http://eslint.org/), make sure your code is remotely sane (**TODO: rules**)

## Setup
```bash
$ npm install
```

## Run development server
webpack-dev-server is used as development server.
It monitors update files and rebuilds them automatically.
Note that this is not suitable for production use.

```bash
$ npm start
```

## Release build
To put compiled files into `static` directory, type the following command.
Note that this is automatically ran as a post-install hook after `npm install`.

```bash
$ npm run build
```

