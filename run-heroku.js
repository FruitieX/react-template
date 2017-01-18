var static = require('spa-express-static-server');

static.start({
  webRootPath: 'static',
  responseHeaders: {
    'Access-Control-Allow-Origin': 'https://superada.herokuapp.com',
    'Access-Control-Allow-Credentials': 'true'
  }
});
