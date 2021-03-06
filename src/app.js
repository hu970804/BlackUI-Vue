import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Header from './layout/header'
import Aside from './layout/aside'
import Content from './layout/content'
import Footer from './layout/footer'
import Toast from './toast'
import plugin from './plugin'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-content', Content);
Vue.component('g-aside', Aside);
Vue.component('g-footer', Footer);
Vue.component('g-toast', Toast);
Vue.use(plugin);


new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: '双向绑定'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value)
        },
        showToast1() {
          this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast('我是toast', {
                position,
                enableHtml: false, // 表示是否支持html
                autoClose: 3,
                closeButton: {
                    text: '关闭',
                    callback() {
                        console.log('用户知道了')
                    },
                },
            })
        }
    }
});
