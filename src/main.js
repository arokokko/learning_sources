import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import TheButton from './components/layout/TheButton.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('the-button', TheButton);
app.mount('#app');
