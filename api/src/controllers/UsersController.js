const {hash} = require("bcryptjs")
const AppError = require("../utils/AppError")
const knex = require("../database/knex")

class UsersController{
  async create(request, response) {
    const {name, email, password} = request.body


    if (!name || !email || !password ) {
      throw new AppError("Todos os campos precisam estar preenchidos para poder criar o cliente")
    }

    const checkUserExists = await (await knex("users").where({email})).length

    if(checkUserExists){
      throw new AppError('Este email já está em uso')
    }

    const hashPassword = await hash(password, 8)

    await knex("users").insert({name, email, password: hashPassword})

    return response.status(201).json({name, email, password})

  }
}

module.exports = UsersController