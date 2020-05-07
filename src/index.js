// 실행을 위해 필요한 것들을 불러오는 것
// 모듈(혹은 패키지, 라이브러리)을 불러오는 부분
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
// 내가 만든 자바스크립트 파일
import Main from './views/Main';
import MapSearch from './views/MapSearch';
import Select from './views/Select';
import PartOfSpeechList from './views/PartOfSpeechList';
import SelectLocation from './views/SelectLocation';
import SelectNoun from './views/SelectNoun';
import SelectVerb from './views/SelectVerb';
import SelectQuant from './views/SelectQuant';
import SelectAdverb from './views/SelectAdverb';
import SelectInterro from './views/SelectInterro';

// 디자인을 위한 css파일
import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/scss/argon-dashboard-react.scss";



// 실행되는 직접적인 코드
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/Main" render={props => <Main {...props} />} />
        <Route path="/MapSearch/:place" render={props => <MapSearch {...props} />} />
        <Route path="/SelectPlace" render={props => <Select {...props} />} />
        <Route path="/ChoosePartofSpeech" render={props => <PartOfSpeechList {...props} />} />
        <Route path="/SelectLocation" render={props => <SelectLocation {...props} />} />
        <Route path="/ChooseNoun" render={props => <SelectNoun {...props} />} />
        <Route path="/ChooseVerb" render={props => <SelectVerb {...props} />} />
        <Route path="/ChooseQuantity" render={props => <SelectQuant {...props} />} />
        <Route path="/ChooseAdverb" render={props => <SelectAdverb {...props} />} />
        <Route path="/ChooseInterro" render={props => <SelectInterro {...props} />} />
        <Redirect from="/" to="/main"/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
