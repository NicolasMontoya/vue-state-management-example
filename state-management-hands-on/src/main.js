import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import store from "./vuex-store/store.js";

createApp(App)
.use(createPinia())
.use(store)
.mount('#app')
