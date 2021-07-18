import { createApp } from 'vue'
import importUiFramework from './utils/import-ui-framework'
import router from './router/index'
import { key, store } from './store'
import App from './App.vue'
import '@/style/basic.styl'
import AV from 'leancloud-storage'

const app = createApp(App)
importUiFramework(app).use(router).use(store, key).mount('#app')
var APP_ID = 'BXO6iXyXMvHE33NUOgBn5L48-gzGzoHsz'
var APP_KEY = 'eReLqaIloJrhz8OFByWQq38B'
AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
    serverURL: "https://bxo6ixyx.lc-cn-n1-shared.com"
})