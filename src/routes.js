import Main from "./views/Main";
import MapSearch from "./views/MapSearch"
import Select from "./views/Select"
import PartOfSpeechList from './views/PartOfSpeechList'

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
