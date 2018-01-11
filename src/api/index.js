import axios from 'axios'

const root = 'http://192.168.88.204:3030/api/'

const link = {
  navigation: root + 'navigation',
  navigationItem: 'navigation-item',
  slider: root + 'slider',
  carousel: root + 'carousel',
  member: root + 'member',
  content: root + 'content',
  admission: root + 'admission',
  banner: root + 'banner',
  winning: root + 'winning',
  news: root + 'news',
  file: root + 'file',
  user: root + 'user'
}

class method {
  static get (link) {
    return {
      method: 'get',
      url: link
    }
  }
  static post (link, data) {
    return {
      method: 'post',
      url: link,
      data: data
    }
  }
}

export const api = {
  navigation: {
    get () {
      return axios(method.get(link.navigation)).then(response => {
        return response.data
      })
    },
    search ({ navigationId }) {
      const requestLink = link.navigation + '/' + navigationId
      return axios(method.get(requestLink)).then(response => {
        return response.data
      })
    },
    create ({ name }) {
      const data = {
        name: name
      }
      return axios(method.post(link.navigation, data)).then(response => {
        return response
      })
    },
    edit () {
      const method = {
        method: 'post',
        url: link.navigation,
        data: {
          name: name
        }
      }
      return axios(method).then(response => {
        return response
      })
    },
    delete () {
      const method = {
        method: 'post',
        url: link.navigation,
        data: {
          name: name
        }
      }
      return axios(method).then(response => {
        return response
      })
    }
  },
  slider: {
    get () {
      return axios(method.get(link.slider)).then(response => {
        return response.data
      })
    }
  },
  banner: {
    get () {
      return axios(method.get(link.banner)).then(response => {
        return response.data
      })
    }
  },
  member: {
    get () {
      return axios(method.get(link.member)).then(response => {
        return response.data
      })
    }
  },
  content: {
    get () {
      return axios(method.get(link.content)).then(response => {
        return response.data
      })
    }
  },
  admission: {
    get () {
      return axios(method.get(link.admission)).then(response => {
        return response.data
      })
    }
  }
}
