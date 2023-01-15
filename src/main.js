import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import vue3GoogleLogin from 'vue3-google-login'
import { createPinia } from 'pinia'
import  PiniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(PiniaPluginPersistedstate)
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(vue3GoogleLogin, {
    clientId: '90949419536-t59ofqf5cetrgkrl5krpa5ht01lgknf1.apps.googleusercontent.com'
})
app.mount('#app')
