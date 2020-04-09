import Main from "./Main";
import Sub from "./Sub"


var routes = [
  {
    path: "/main",
    name: "main",
    component: Main,
    layout: "/main"
  },
  {
    path: "/sub",
    name: "sub",
    component: Sub,
    layout: "/sub"
  },
];

export default routes;
