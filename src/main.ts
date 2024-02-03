import './assets/main.css'
import 'v-calendar/style.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Calendar from 'v-calendar'
import DatePicker from 'v-calendar'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(Calendar, {})
app.use(DatePicker, {})
app.use(createPinia())
app.use(router)



app.mount('#app')
