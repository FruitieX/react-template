import {
  setConfiguration
} from './utils/configuration';

import config from 'config';

setConfiguration('API_ROOT', config.API_ROOT);

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import { language, messages } from './utils/intl';

import {
  Router,
  Route,
  browserHistory,
  IndexRoute,
  Redirect
} from 'react-router'

import {
  syncHistoryWithStore,
  routerReducer,
  routerActions
} from 'react-router-redux'

import { UserAuthWrapper } from 'redux-auth-wrapper'

import App from './modules/App';

import Login from './modules/Auth/Login';
import routes from './utils/routes';

import configureStore from './redux/store';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './utils/theme';
const muiTheme = getMuiTheme(theme);

//Needed for React Developer Tools
window.React = React;

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

const requireAuthentication = UserAuthWrapper({
  authSelector: state => state.auth.data,
  predicate: authData => authData.token,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'requireAuthentication'
})

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <IntlProvider
        locale={language}
        key={language}
        messages={messages}
      >
        <Router history={history}>
          <Route path='/login' component={Login}/>
          <Route path='/' component={requireAuthentication(App)}>
            <IndexRoute component={routes[0].component}/>
            <Redirect from={routes[0].path} to='/' />
            {
              routes.map((route, index) => (
                <Route key={index} path={route.path} component={route.component} />
              ))
            }
          </Route>
          <Redirect from='*' to='/' />
        </Router>
      </IntlProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
