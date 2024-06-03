import KxzElement from 'kxz-element';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
console.log(KxzElement);

app.use(KxzElement);
app.mount('#app');
