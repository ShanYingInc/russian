export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'navigation/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ name, order }) {
    return await this.instance.post(this.link, { name, order })
  }

  async edit ({ navigation_id, name, order }) {
    const requestLink = this.link + navigation_id
    return await this.instance.patch(requestLink, { navigation_id, name, order })
  }

  async delete ({ navigation_id }) {
    const requestLink = this.link + navigation_id
    return await this.instance.delete(requestLink)
  }
}
