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
    path: "/main",
    name: "main",
    component: Main,
    layout: "/main"
  },
  {
    path: "/map_search",
    name: "map_search",
    component: MapSearch,
    layout: "/map_search"
  },
  {
    path: "/select_place",
    name: "select_place",
    component: Select,
    layout: "/select_place"
  },
  {
    path: "/select_Location",
    name: "select_Location",
    component: SelectLocation,
    layout: "/select_Location"
  },
  {
    path: "/choose1",
    name: "choose1",
    component: PartOfSpeechList,
    layout: "/choose1"
  },
  {
    path: "/choose_noun",
    name: "choose_noun",
    component: SelectNoun,
    layout: "/choose_noun"
  },
  {
    path: "/choose_verb",
    name: "choose_verb",
    component: SelectVerb,
    layout: "/choose_verb"
  },
  {
    path: "/choose_quantity",
    name: "choose_quantity",
    component: SelectQuant,
    layout: "/choose_quantity"
  },
  {
    path: "/choose_adverb",
    name: "choose_adverb",
    component: SelectAdverb,
    layout: "/choose_adverb"
  },
  {
    path: "/choose_interro",
    name: "choose_interro",
    component: SelectInterro,
    layout: "/choose_interro"
  },
];

export default routes;
