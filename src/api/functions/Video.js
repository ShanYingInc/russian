export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'video/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ title, content, image, link }) {
    return await this.instance.post(this.link, { title, content, image, link })
  }

  async edit ({ video_id, title, content, image, link }) {
    const requestLink = this.link + ''
    return await this.instance.patch(requestLink, { title, content, image, link })
  }

  async delete ({ video_id }) {
    const requestLink = this.link + video_id
    return await this.instance.delete(requestLink)
  }
}
