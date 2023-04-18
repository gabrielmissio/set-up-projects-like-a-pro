require('dotenv').config()
const mongoHelper = require('../helpers/mongo-helper')

const data = [
  { name: 'John', email: 'john@mail.com' },
  { name: 'Jane', email: 'jane@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
]

const start = async () => {
  const userModel = await mongoHelper.getCollection('Users')
  await userModel.deleteMany({})
  await userModel.insertMany(data)

  mongoHelper.disconnect()
}

mongoHelper.connect(process.env.MONGO_URI)
  .then(start)
  .catch((error) => console.error(error))
