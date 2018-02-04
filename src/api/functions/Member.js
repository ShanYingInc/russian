export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'member/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ name, position, teaching_lessons, email, telephone, type, uri }) {
    return await this.instance.post(this.link, { name, position, teaching_lessons, email, telephone, type, uri })
  }

  async edit ({ member_id, name, position, teaching_lessons, email, telephone, type, uri }) {
    const requestLink = this.link + member_id
    return await this.instance.patch(requestLink, { name, position, teaching_lessons, email, telephone, type, uri })
  }

  async delete (member_id) {
    const requestLink = this.link + member_id
    return await this.instance.delete(requestLink)
  }
}
