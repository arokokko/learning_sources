import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import TheButton from './components/UI/TheButton.vue';
import BaseDialog from './components/BaseDialog.vue';

const app = createApp(App);

app.component('base-dialog', BaseDialog);
app.component('base-card', BaseCard);
app.component('the-button', TheButton);
app.mount('#app');
