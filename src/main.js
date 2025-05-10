import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Vuetify
import vuetify from './plugins/vuetify'

//Components
import App from './App.vue'

const app = createApp(App)

app.use(vuetify)

app.use(createPinia())

app.mount('#app')
