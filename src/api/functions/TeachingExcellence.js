export default class {
  constructor (instance) {
    this.instance = instance
    this.link = 'teaching-excellence/'
  }

  async get () {
    return await this.instance.get(this.link)
  }

  async create () {
    return await this.instance.post(this.link)
  }

  async edit () {
    const requestLink = this.link + ''
    return await this.instance.patch(requestLink, {})
  }

  async delete () {
    const requestLink = this.link + 'none'
    return await this.instance.delete(requestLink)
  }
}
