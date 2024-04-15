class UsersController{
  async create(request, response) {
    const {name, email} = request.body

    return response.status(201).json({name, email})

  }
}

module.exports = UsersController