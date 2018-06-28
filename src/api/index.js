import axios from 'axios'

import Admission from './functions/Admission'
import Album from './functions/Album'
import Banner from './functions/Banner'
import Content from './functions/Content'
import EventHighlight from './functions/EventHighlight'
import Member from './functions/Member'
import Navigation from './functions/Navigation'
import NavigationItem from './functions/NavigationItem'
import News from './functions/News'
import User from './functions/User'
import Video from './functions/Video'
import SingleFileUpload from './functions/SingleFileUpload'
import TeachingExcellence from './functions/TeachingExcellence'

class Api {
  constructor () {
    this.currentPort = 3030
    this.lang = 'tw'
  }

  get rootLink () {
    return 'http://163.13.164.37' + ':' + this.currentPort + '/'
  }

  get apiLink () {
    return this.rootLink + 'api/'
  }

  get options () {
    return {
      baseURL: this.apiLink
    }
  }

  get instance () {
    return axios.create(this.options)
  }

  set port (port) {
    this.currentPort = port
  }

  switchLanguage (language) {
    switch (language) {
      case 'tw':
        this.port = 3030
        this.lang = 'tw'
        break
      case 'en':
        this.port = 3031
        this.lang = 'en'
        break
      case 'ru':
        this.port = 3032
        this.lang = 'ru'
        break
      default:
        this.port = 3030
        this.lang = 'tw'
    }
  }

  get admission () {
    return new Admission(this.instance)
  }

  get album () {
    return new Album(this.instance)
  }

  get banner () {
    return new Banner(this.instance)
  }

  get content () {
    return new Content(this.instance)
  }

  get eventHighlight () {
    return new EventHighlight(this.instance)
  }

  get member () {
    return new Member(this.instance)
  }

  get navigation () {
    return new Navigation(this.instance)
  }

  get navigationItem () {
    return new NavigationItem(this.instance)
  }

  get news () {
    return new News(this.instance)
  }

  get user () {
    return new User(this.instance)
  }

  get video () {
    return new Video(this.instance)
  }

  get singleFileUpload () {
    return new SingleFileUpload(this.instance)
  }

  get teachingExcellence () {
    return new TeachingExcellence(this.instance)
  }
}

export default Api
