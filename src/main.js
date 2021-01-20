import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

new Vue({

    created() {
        AOS.init({
            easing: 'ease-out-back',
            duration: 3000,
            delay: 300,
        })
    },
    render: h => h(App),
}).$mount('#app')