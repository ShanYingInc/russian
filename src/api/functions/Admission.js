export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'admission/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ category, title, file_download }) {
    return await this.instance.post(this.link)
  }

  async edit ({ admission_id, category, title, file_download }) {
    const requestLink = this.link + admission_id
    return await this.instance.patch(requestLink, { category, title, file_download })
  }

  async delete ({ admission_id }) {
    const requestLink = this.link + admission_id
    return await this.instance.delete(requestLink)
  }
}
