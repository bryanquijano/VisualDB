import { createRouter, createWebHistory } from "vue-router";
import useAuth from "./composable/useAuth";

// Importing the pages
import Index from "./pages/index.vue";
import About from "./pages/about.vue";
import Login from "./pages/login.vue";
import Secret from "./pages/secret.vue";
import NotFound from "./pages/404.vue";

const { isAuthenticated } = useAuth();

// Creating the routes
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/secret",
    name: "Secret",
    component: Secret,
    beforeEnter: (to, from, next) => {
      // If user is not authenticated, redirect them to login page
      if (!isAuthenticated.value) {
        next("/login");
      }
      // If user is authenticated, let them access secret page
      next();
    },
  },
  // If a path isn't found then redirect to the 404 page not found page
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

// Creating the router
const router = createRouter({
  // What to do when you go back a page
  history: createWebHistory(),
  // Importing the routers we created
  routes: routes,
});

export default router;
