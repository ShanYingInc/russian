export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'event-highlight/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create (items = []) {
    return await this.instance.post(this.link, items)
  }

  async edit ({ event_highlight_id, order = 0, description = '', uri = null }) {
    const requestLink = this.link + event_highlight_id
    return await this.instance.patch(requestLink, { order, description, uri })
  }

  async delete ({ event_highlight_id }) {
    const requestLink = this.link + event_highlight_id
    return await this.instance.delete(requestLink)
  }
}
