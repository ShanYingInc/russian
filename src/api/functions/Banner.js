export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'banner/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create (files = []) {
    return await this.instance.post(this.link, files)
  }

  async edit ({ banner_id, title, content, uri }) {
    const requestLink = this.link + banner_id
    return await this.instance.patch(requestLink, { title, content, uri })
  }

  async delete ({ banner_id }) {
    const requestLink = this.link + banner_id
    return await this.instance.delete(requestLink)
  }
}
