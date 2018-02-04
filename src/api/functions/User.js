export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'user/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ email, password, uri }) {
    return await this.instance.post(this.link, { email, password, uri })
  }

  async edit ({ user_id, email, password, uri }) {
    const requestLink = this.link + user_id
    return await this.instance.patch(requestLink, { email, password, uri })
  }

  async delete ({ user_id }) {
    const requestLink = this.link + user_id
    return await this.instance.delete(requestLink)
  }
}
