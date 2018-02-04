import Api from '.'

const ApiPlugin = {
  install (Vue, options) {
    Vue.prototype.$api = new Api()
  }
}

export default ApiPlugin
