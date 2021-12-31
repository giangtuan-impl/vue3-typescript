import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import test from "./test";

const routes: RouteRecordRaw[] = [...test];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) return { el: to.hash, behavior: "smooth" };
		if (savedPosition) return savedPosition;
		return { top: 0, behavior: "smooth" };
	},
});

export default router;
