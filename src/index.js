import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from './Main';
import Sub from './Sub';

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/scss/argon-dashboard-react.scss";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/main" render={props => <Main {...props} />} />
      <Route path="/sub" render={props => <Sub {...props} />} />
      <Redirect from="/" to="/main"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
