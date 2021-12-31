import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import i18n from "./plugins/i18n";
import "./assets/scss/main.scss";

const app = createApp(App);
app.use(i18n);
app.use(router);
app.mount("#app");
