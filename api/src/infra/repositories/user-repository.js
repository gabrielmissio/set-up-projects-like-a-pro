const mongoHelper = require('../helpers/mongo-helper')

exports.create = async (user) => {
  const userModel = await mongoHelper.getCollection('Users')
  await userModel.insertOne(user)

  user.id = user._id.toString()
  delete user._id

  return user
}

exports.getById = async (id) => {
  const userModel = await mongoHelper.getCollection('Users')
  const user = await userModel.findOne({ _id: mongoHelper.getObjectId(id) })

  if (user) {
    user.id = user._id.toString()
    delete user._id
  }

  return user
}

exports.getByEmail = async (email) => {
  const userModel = await mongoHelper.getCollection('Users')
  const user = await userModel.findOne({ email })

  if (user) {
    user.id = user._id.toString()
    delete user._id
  }

  return user
}

exports.getAll = async () => {
  const userModel = await mongoHelper.getCollection('Users')
  const users = await userModel.find().toArray()

  const result = {
    data: users.map((user) => {
      user.id = user._id.toString()
      delete user._id

      return user
    }),
    metadata: { count: users.length }
  }
  return result
}

exports.updateById = async (id, payload) => {
  const userModel = await mongoHelper.getCollection('Users')
  const updatedUser = await userModel.updateOne({ _id: mongoHelper.getObjectId(id) }, { $set: payload })

  return updatedUser
}

exports.deleteById = async (id) => {
  const userModel = await mongoHelper.getCollection('Users')
  await userModel.deleteOne({ _id: mongoHelper.getObjectId(id) })

  return true
}
