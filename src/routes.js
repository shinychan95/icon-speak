import Main from "./Main";
import Map_Search from "./Map_Search"


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
];

export default routes;
