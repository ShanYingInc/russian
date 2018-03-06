export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'teaching-excellence/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ title, year, content }) {
    return await this.instance.post(this.link, { title, year, content })
  }

  async edit ({ teaching_excellence_id, title, year, content }) {
    const requestLink = this.link + teaching_excellence_id
    return await this.instance.patch(requestLink, { title, year, content })
  }

  async delete ({ teaching_excellence_id }) {
    const requestLink = this.link + teaching_excellence_id
    return await this.instance.delete(requestLink)
  }
}
