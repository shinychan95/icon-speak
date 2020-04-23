import Main from "./views/Main";
import MapSearch from "./views/MapSearch"
import Select from "./views/Select"
import PartOfSpeechList from './views/PartOfSpeechList'
import SelectLocation from './views/SelectLocation'
import SelectWord from './views/SelectWord'

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
    path: "/choose2",
    name: "choose2",
    component: SelectWord,
    layout: "/choose2"
  },
];

export default routes;
