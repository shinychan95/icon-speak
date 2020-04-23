import Main from "./Main";
import Map_Search from "./Map_Search"
import Select from "./Select"
import Part_of_Speech_List from './Part_of_Speech_List'

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
    component: Map_Search,
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
    component: Part_of_Speech_List,
    layout: "/choose1"
  },
];

export default routes;
