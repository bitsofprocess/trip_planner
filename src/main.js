/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'


// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Plugins
import { registerPlugins } from '@/plugins'
import '@mdi/font/css/materialdesignicons.css'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)
const pinia = createPinia()

registerPlugins(app)

app.use(pinia)
app.component('VueDatePicker', VueDatePicker)
app.mount('#app')

