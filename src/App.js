import React, { Fragment, useState } from 'react';
import { createBrowserHistory } from 'history';
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';

import { GuardProvider, GuardedRoute } from 'react-router-guards';
import {TrainingCourseDetails, Home, Login, NotFound, Layout, Landingpage, Coursedetails, CongressDetails } from './pages';


import './App.scss';

import { getIsLoggedIn } from './utils';
 
const history = createBrowserHistory();
 
const requireLogin = (to, from, next) => {
  if (getIsLoggedIn()) {
    next();
  }
  next.redirect('/login');
};
/*
          <GuardProvider>
            <GuardedRoute path="/login" exact component={Login} />
          </GuardProvider>
          */
/*
            <Layout>
              <Trainingcourse data={data_7355}/>
            </Layout>


*/

/*
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Fragment>
        <header className="App-header">

          <GuardProvider guards={[requireLogin]}>
            <GuardedRoute path="/" exact component={Landingpage} />
            <GuardedRoute path="/:id" component={Coursedetails} />
          </GuardProvider>>
        </header>
        </Fragment>
      </div>
    </Router>
  );
}

*/

const theme = createMuiTheme();

function App() {
  return (
      <div className="App">
        <Fragment>
        <header className="App-header">
        <ThemeProvider theme={theme}>
        <Router>
            <Switch>
              <Route exact path="/" component={Landingpage} />
              <Route exact path="/courses/:id" component={Coursedetails} />
              <Route exact path="/congress/:id" component={CongressDetails} />              
              <Route exact path="/trainingcourses/:id" component={TrainingCourseDetails} />
            </Switch>
          </Router>

          </ThemeProvider>
        </header>
        </Fragment>
      </div>
  );
}

export default App;
