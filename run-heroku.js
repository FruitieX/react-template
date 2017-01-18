var static = require('spa-express-static-server');

static.start({
  webRootPath: 'static',
  responseHeaders: {
    'Access-Control-Allow-Origin': 'https://myapp.herokuapp.com',
    'Access-Control-Allow-Credentials': 'true'
  }
});
