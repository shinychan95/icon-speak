// 실행을 위해 필요한 것들을 불러오는 것
// 모듈(혹은 패키지, 라이브러리)을 불러오는 부분
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
// 내가 만든 자바스크립트 파일
import Navigation from "./component/Navigation";
import Home from './views/Home';
import SelectLocation from './views/SelectLocation';


import MapSearch from './views/MapSearch';

import MakeSpeech from './views/MakeSpeech';
import SelectPlace from './views/SelectPlace';
import SelectNoun from './views/SelectNoun';
import SelectVerb from './views/SelectVerb';
import SelectQuant from './views/SelectQuant';
import SelectAdverb from './views/SelectAdverb';
import SelectInterro from './views/SelectInterro';
import About from "./component/About";
import Error_page from "./component/Error_page";

// 디자인을 위한 css파일
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/scss/argon-dashboard-react.scss";


// 실행되는 직접적인 코드
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navigation props />
      <Switch>
        <Route path="/Home" exact={true} component={Home} />
        <Route path="/SelectLocation" exact={true} component={SelectLocation} />
        <Route path="/MapSearch/:place" exact={true} component={MapSearch} />  

        <Route path="/MakeSpeech" exact={true} component={MakeSpeech} />
        <Route path="/SelectPlace" exact={true} component={SelectPlace} />
        <Route path="/ChooseNoun" exact={true} component={SelectNoun} />
        <Route path="/ChooseVerb" exact={true} component={SelectVerb} />
        <Route path="/ChooseQuantity" exact={true} component={SelectQuant} />
        <Route path="/ChooseAdverb" exact={true} component={SelectAdverb} />
        <Route path="/ChooseInterro" exact={true} component={SelectInterro} />
        <Route path="/about" exact={true} component={About} />
        <Redirect from='/' to='/Home' />
        <Route component={Error_page} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
