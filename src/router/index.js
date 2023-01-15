import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MessageView from "../views/MessageView";
import LoginView from "../views/LoginView";
import EmailView from "../views/template/EmailView";
import { useUserStore } from "@/store/user-store";

const routes = [
  {
    path: "/",
    component: LoginView,
  },
  {
    path: "/email",
    component: EmailView,
    beforeEnter: (to, from, next) => {
      useUserStore().email ? next() : next('/')
    },
    children: [
      {
        path: "",
        component: HomeView,
      },
      {
        path: "message/:id",
        component: MessageView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
