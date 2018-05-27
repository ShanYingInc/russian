import Vue from 'vue'
import VueI18n from 'vue-i18n'
import tw from './tw.json'
import en from './en.json'
import ru from './ru.json'


Vue.use(VueI18n)

const locale = 'tw'
const fallbackLocale = 'tw'
const messages = { tw, en, ru }

const i18n = new VueI18n({
  locale,
  fallbackLocale,
  messages
})

export default i18n
