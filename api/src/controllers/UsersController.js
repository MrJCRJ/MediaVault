const {hash} = require("bcryptjs")

class UsersController{
  async create(request, response) {
    const {name, email, password} = request.body

    const hashPassword = await hash(password, 8)

    return response.status(201).json({name, email, password})

  }
}

module.exports = UsersController