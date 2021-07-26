import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "iview/dist/locale/en-US";
import zh from "iview/dist/locale/zh-CN";
import custom_en from './config/en';
import custom_zh from './config/zh';
Vue.use(VueI18n);

const messages = {
    en: Object.assign(custom_en, en),
    zh: Object.assign(custom_zh, zh),
}
// 角色判断 userRole 0 管理员 1 普通用户 2 网红
let userRole = JSON.parse(window.localStorage.getItem('userinfo')).userRole;
export const i18n = new VueI18n({
    locale: userRole==2?'en':'zh', //设置地区
    messages
})