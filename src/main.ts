import {createApp} from 'vue'
import {createPinia} from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import templates from "@/components/template/index";
import 'jsoneditor';

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(ElementPlus, {size: 'small'})
app.use(createPinia())
app.use(router)


Object.keys(templates).map((item) => app.component(item, templates[item]))

app.mount('#app')
