export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'album/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ title, content }) {
    return await this.instance.post(this.link, { title, content })
  }

  async edit ({ album_id, title, content }) {
    const requestLink = this.link + album_id
    return await this.instance.patch(requestLink, { album_id, title, content })
  }

  async delete ({ album_id }) {
    const requestLink = this.link + album_id
    return await this.instance.delete(requestLink)
  }
}
