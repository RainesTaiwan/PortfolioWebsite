import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

const style = document.createElement('style')
style.textContent = `
  html {
    scroll-behavior: smooth;
  }
`
document.head.appendChild(style)

app.mount('#app')
