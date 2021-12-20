import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from "./router";
import { createStore } from "vuex";
import { dataStore } from "@/store";

const store = createStore(dataStore)
createApp(App).use(router).use(store).mount("#app");
