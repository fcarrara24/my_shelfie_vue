import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import PlayerSelection from "./pages/PlayerSelection.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
        meta: { title: "Home" },
    },
    {
        path: "/players",
        name: "player",
        component: PlayerSelection,
        meta: { title: "PlayerSelection" },
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// Watcher globale per cambiamenti di route
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || "My Shelfie"; // Imposta il titolo della pagina
    next();
});


export default router;
