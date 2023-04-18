const { randomUUID } = require('crypto')

exports.create = async (user) => {
  return {
    id: randomUUID(),
    ...user
  }
}

exports.getById = async (id) => {
  return {
    id,
    name: 'John',
    email: 'john@mail'
  }
}

exports.getByEmail = async (email) => {
  return {
    id: randomUUID(),
    name: 'John',
    email
  }
}

exports.getAll = async () => {
  return {
    data: [
      {
        id: randomUUID(),
        name: 'John',
        email: 'john@mail'
      }
    ],
    metadata: {
      count: 1
    }
  }
}
