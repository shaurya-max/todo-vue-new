import { createApp } from 'vue';
import App from './App.vue';
import router from './Router/route'; // Ensure the path is correct

const app = createApp(App);

app.use(router);

app.mount('#app');
