// 실행을 위해 필요한 것들을 불러오는 것
// 모듈(혹은 패키지, 라이브러리)을 불러오는 부분
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// 내가 만든 자바스크립트 파일
import Main from './Main';
import Map_Search from './Map_Search';
// 디자인을 위한 css파일
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/scss/argon-dashboard-react.scss";


// 실행되는 직접적인 코드
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/main" render={props => <Main {...props} />} />
      <Route path="/map_search" render={props => <Map_Search {...props} />} />
      <Redirect from="/" to="/main"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
