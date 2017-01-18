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

import App from './modules/AppViewContainer';
//import Login from '../containers/Login';
//import Register from '../containers/Register';
//import Logout from '../containers/Logout';


import Home from './modules/Home/HomeViewContainer';
import Lectures from './modules/Lectures/LectureViewContainer';
import LectureDetails from './modules/LectureDetails/LectureDetailsViewContainer';
import Experts from './modules/Experts/ExpertViewContainer';
import ExpertDetails from './modules/ExpertDetails/ExpertDetailsViewContainer';
import Teachers from './modules/Teachers/TeacherViewContainer';
import TeacherDetails from './modules/TeacherDetails/TeacherDetailsViewContainer';

import Register from './modules/RegisterExpert/RegisterExpertViewContainer';

import Preferences from './modules/Preferences';

import configureStore from './redux/store';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import theme from './material_ui_raw_theme_file';
const muiTheme = getMuiTheme(theme);

//Needed for React Developer Tools
window.React = React;

const store = configureStore();

// react-router-redux interop with redux-immutablejs
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toObject();
  }
});

const requireAuthentication = UserAuthWrapper({
  authSelector: state => state.auth.data,
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
          <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Redirect from='/home' to='/' />
            <Route path='/lectures' component={Lectures}/>
            <Route path='/lectures/:id' component={LectureDetails}/>
            <Route path='/experts' component={Experts}/>
            <Route path='/experts/:id' component={ExpertDetails}/>
            <Route path='/teachers' component={Teachers}/>
            <Route path='/teachers/:id' component={TeacherDetails}/>
            <Route path='/preferences' component={Preferences}/>
            <Route path='/register' component={Register}/>
          </Route>
          <Redirect from='*' to='/' />
        </Router>
      </IntlProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
