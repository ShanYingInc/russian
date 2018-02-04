export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'content/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ key, values }) {
    return await this.instance.post(this.link, { key, values })
  }

  async edit ({ key, values }) {
    const requestLink = this.link + key
    return await this.instance.patch(this.link, { key, values })
  }

  async delete ({ key }) {
    const requestLink = this.link + key
    return await this.instance.delete(requestLink)
  }
}
