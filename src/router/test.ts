import { RouteRecordRaw } from "vue-router";
import HelloWorldVue from "../components/HelloWorld.vue";
// Lazy import component, only import once time when first time visit link. then use the cached version
const HelloWorldVueLazyLoad = () => import("../components/HelloWorld.vue");

const routes: RouteRecordRaw[] = [
	{
		path: "/foo",
		// component: HelloWorldVue,
		component: HelloWorldVueLazyLoad,
	},
];

export default routes;
