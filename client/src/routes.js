import Landing from "./views/Landing";
import Login from "./views/Login";

export const publicRoutes = [
  {
    path: "/web",
    component: Landing,
    exact: true
  },
  {
    path: "/login",
    component: Login,
    exact: true
  }
];

export const privateRoutes = [{}];
