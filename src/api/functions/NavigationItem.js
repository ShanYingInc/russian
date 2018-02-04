export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'navigation-item/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create ({ navigation_id, name, content_key, order }) {
    return await this.instance.post(this.link, { navigation_id, name, content_key, order })
  }

  async edit ({ navigation_item_id, navigation_id, name, content_key , order }) {
    const requestLink = this.link + navigation_item_id
    return await this.instance.patch(requestLink, { navigation_item_id, navigation_id, name, content_key , order })
  }

  async delete ({ navigation_item_id }) {
    const requestLink = this.link + navigation_item_id
    return await this.instance.delete(requestLink)
  }
}
