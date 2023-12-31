import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)
library.add(faMagnifyingGlass)

import './assets/main.css'

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
