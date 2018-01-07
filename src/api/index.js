export const api = {
  root: 'http://192.168.88.204:3001',
  getAllStaff () {
    const link = this.root + '/staff'
    const method = {
      method: 'GET'
    }
    const request = new Request(link, method)
    // Request() (應該)是設計給 fetch() 使用的物件
    // 凡舉 method, header, body 都可使用 Request() 包裝好
    // 再用 fetch() 傳入這個 Request() 即可成功使用 AJAX
    return request
    /*
    output = [
      {
        name: 'xxx',
        email: 'xxx',
        logo: 'xxx'
      }
    ]
    */
  },
  getStaff (id) {
    const link = this.root + '/staff/' + id
    const method = {
      method: 'GET'
    }
    const request = new Request(link, method)
    return request
    // no output
  },
  loginAuth ({ name, password }) {
    const link = this.root + '/staff/login'
    const method = {
      method: 'POST',
      body: {
        name: name,
        password: password
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Logged in",
      failed(wrong password): "Not logged in",
      failed(wrong account): "Staff not found",
    }
    */
  },
  addAccount ({ name, password, email }) {
    const link = this.root + '/staff/add'
    const method = {
      method: 'POST',
      body: {
        name: name,
        password: password,
        email: email
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Added successfully",
      failed: "Name is already used",
      failed(less input): "error"
    }
    */
  },
  updateEmail ({ name, email }) {
    const link = this.root + '/staff/email'
    const method = {
      method: 'PATCH',
      body: {
        name: name,
        email: email
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Successfully",
      failed: "Error"
    }
    */
  },
  updatePassword ({ name, password, newpwd }) {
    const link = this.root + '/staff/passwd'
    const method = {
      method: 'PATCH',
      body: {
        name: name,
        password: password,
        newpwd: newpwd
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Successfully",
      failed(wrong pwd): "Password error",
      failed(less input): "No password"
    }
    */
  },
  deleteAccount (name) {
    const link = this.root + '/staff/del'
    const method = {
      method: 'DELETE',
      body: {
        name: name
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = null
    */
  },
  uploadFile ({ file, name }) {
    const link = this.root + '/upload'
    const method = {
      method: 'POST',
      body: {
        file: file,
        name: name
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "OK"
    }
    */
  },
  getAllSidebar () {
    const link = this.root + '/sidebar'
    const method = {
      method: 'GET'
    }
    const request = new Request(link, method)
    return request
    /*
    output = [
      {
        title: "xxx",
        content: "xxx",
        creat_at: "xxx"
      },
      ...
    ]
    */
  },
  getSidebar (title) {
    const link = this.root + '/sidebar/search'
    const method = {
      method: 'POST',
      body: {
        title: title
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: {
        title: "xxx",
        content: "xxx",
        create_at: "xxx"
      },
      failed: "Not found"
    }
    */
  },
  addSidebar ({ title, content }) {
    const link = this.root + '/sidebar/add'
    const method = {
      method: 'POST',
      body: {
        title: title,
        content: content
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Added successfully",
      failed: "Title is already used"
    }
    */
  },
  updateSidebar ({ title, newtitle = undefined, content }) {
    if (newtitle === undefined) {
      newtitle = title
    }

    const link = this.root + '/staff/del'
    const method = {
      method: 'DELETE',
      body: {
        title: title,
        newtitle: newtitle,
        content: content
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Successfully",
      failed: "Title not found"
    }
    */
  },
  deleteSidebar (title) {
    const link = this.root + '/sidebar/del'
    const method = {
      method: 'DELETE',
      body: {
        title: title
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = null
    */
  },
  getAllNavbar () {
    const link = this.root + '/navbar'
    const method = {
      method: 'GET'
    }
    const request = new Request(link, method)
    return request
    /*
    output = [
      {
        title: "xxx",
        contenet: "xxx",
        create_at: "xxx"
      }
    ]
    */
  },
  getNavbar (title) {
    const link = this.root + '/navbar/search'
    const method = {
      method: 'POST',
      body: {
        title: title
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: {
        title: "xxx",
        content: "xxx",
        created: "xxx"
      },
      failed: "Not found"
    }
    */
  },
  addNavbar ({ title, content }) {
    const link = this.root + '/navbar/add'
    const method = {
      method: 'POST',
      body: {
        title: title,
        content: content
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Added successfully",
      failed: "Title is already used"
    }
    */
  },
  updateNavbar ({ title, newtitle = undefined, content }) {
    if (newtitle === undefined) {
      newtitle = title
    }

    const link = this.root + '/navbar/modify'
    const method = {
      method: 'PATCH',
      body: {
        title: title,
        newtitle: newtitle,
        content: content
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = {
      successed: "Successfully",
      failed: "Title not found"
    }
    */
  },
  deleteNavbar (title) {
    const link = this.root + '/navbar/del'
    const method = {
      method: 'DELETE',
      body: {
        title: title
      }
    }
    const request = new Request(link, method)
    return request
    /*
    output = null
    */
  }
}
