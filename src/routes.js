import Main from "./views/Main";
import MapSearch from "./views/MapSearch"
import Select from "./views/Select"
import PartOfSpeechList from './views/PartOfSpeechList'
import SelectLocation from './views/SelectLocation'
import SelectNoun from './views/SelectNoun'
import SelectVerb from './views/SelectVerb'
import SelectQuant from './views/SelectQuant'
import SelectAdverb from './views/SelectAdverb'
import SelectInterro from './views/SelectInterro'

var routes = [
  {
    path: "/Main",
    name: "Main",
    component: Main,
    layout: "/Main"
  },
  {
    path: "/MapSearch",
    name: "MapSearch",
    component: MapSearch,
    layout: "/MapSearch"
  },
  {
    path: "/SelectPlace",
    name: "SelectPlace",
    component: Select,
    layout: "/SelectPlace"
  },
  {
    path: "/SelectLocation",
    name: "SelectLocation",
    component: SelectLocation,
    layout: "/SelectLocation"
  },
  {
    path: "/ChoosePartofSpeech",
    name: "ChoosePartofSpeech",
    component: PartOfSpeechList,
    layout: "/ChoosePartofSpeech"
  },
  {
    path: "/ChooseNoun",
    name: "ChooseNoun",
    component: SelectNoun,
    layout: "/ChooseNoun"
  },
  {
    path: "/ChooseVerb",
    name: "ChooseVerb",
    component: SelectVerb,
    layout: "/ChooseVerb"
  },
  {
    path: "/ChooseQuantity",
    name: "ChooseQuantity",
    component: SelectQuant,
    layout: "/ChooseQuantity"
  },
  {
    path: "/ChooseAdverb",
    name: "ChooseAdverb",
    component: SelectAdverb,
    layout: "/ChooseAdverb"
  },
  {
    path: "/ChooseInterro",
    name: "ChooseInterro",
    component: SelectInterro,
    layout: "/ChooseInterro"
  },
];

export default routes;
