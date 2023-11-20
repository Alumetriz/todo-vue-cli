import {createApp} from 'vue'
import App from './App.vue'
import HeaderComponent from "@/components/HeaderComponent.vue";
import HeaderItem from "@/components/HeaderItem.vue";
import AddTask from "@/components/AddTask.vue";
import ModalWindow from "@/components/ModalWindow.vue";

const vueApp = createApp(App)

vueApp.component('header-component', HeaderComponent);
vueApp.component('header-item', HeaderItem);
vueApp.component('add-task', AddTask);
vueApp.component('modal-window', ModalWindow);

vueApp.mount('#app');
