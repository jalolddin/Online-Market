import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/header.css";
import "./assets/styles/main.css";
import "./assets/styles/navbar.css";
import "./assets/styles/footer.css";
createApp(App).use(store).use(router).mount("#app");
