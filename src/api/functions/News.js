export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'news/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ title, content, type }) {
    return await this.instance.post(this.link, { title, content, type })
  }

  async edit ({ news_id, title, content, type }) {
    const requestLink = this.link + news_id
    return await this.instance.patch(requestLink, { title, content, type })
  }

  async delete ({ news_id }) {
    if (news_id) {
      const requestLink = this.link + news_id
      return await this.instance.delete(requestLink)
    } else {
      return null
    }
  }
}
