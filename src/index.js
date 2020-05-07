// 실행을 위해 필요한 것들을 불러오는 것
// 모듈(혹은 패키지, 라이브러리)을 불러오는 부분
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
  <BrowserRouter>
    <Switch>
      <Route path="/main" render={props => <Main {...props} />} />
      <Route path="/map_search" render={props => <MapSearch {...props} />} />
      <Route path="/select_place" render={props => <Select {...props} />} />
      <Route path="/choose1" render={props => <PartOfSpeechList {...props} />} />
      <Route path="/select_Location" render={props => <SelectLocation {...props} />} />
      <Route path="/choose_noun" render={props => <SelectNoun {...props} />} />
      <Route path="/choose_verb" render={props => <SelectVerb {...props} />} />
      <Route path="/choose_quantity" render={props => <SelectQuant {...props} />} />
      <Route path="/choose_adverb" render={props => <SelectAdverb {...props} />} />
      <Route path="/choose_interro" render={props => <SelectInterro {...props} />} />
      <Redirect from="/" to="/main"/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
