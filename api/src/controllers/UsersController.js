const {hash} = require("bcryptjs")
const AppError = require("../utils/AppError")

class UsersController{
  async create(request, response) {
    const {name, email, password} = request.body


    if (!name || !email || !password ) {
      throw new AppError("Todos os campos precisam estar preenchidos para poder criar o cliente")
    }

    const hashPassword = await hash(password, 8)

    return response.status(201).json({name, email, password})

  }
}

module.exports = UsersController