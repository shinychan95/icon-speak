import Main from "./Main";
import MapSearch from "./MapSearch"
import Select from "./Select"
import PartOfSpeechList from './PartOfSpeechList'

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
    path: "/choose1",
    name: "choose1",
    component: PartOfSpeechList,
    layout: "/choose1"
  },
];

export default routes;
