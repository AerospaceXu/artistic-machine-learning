import { createApp } from 'vue';
import App from './App.vue';
import './styles/index.scss';

import 'ant-design-vue/dist/antd.css';
import { Button } from 'ant-design-vue';

import router from './router';

const app = createApp(App);
app.use(Button);
app.use(router).mount('#app');
