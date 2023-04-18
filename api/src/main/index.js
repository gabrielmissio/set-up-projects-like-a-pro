if (process.env.IS_LOCALHOST === 'true') require('dotenv').config()
const mongoHelper = require('../infra/helpers/mongo-helper')

const PORT = Number(process.env.PORT)
const MONGO_URI = process.env.MONGO_URI

mongoHelper.connect(MONGO_URI)
  .then(() => {
    const app = require('./app')
    app.listen(PORT, () => console.log(`running on port ${PORT}`))
  })
  .catch((error) => console.error(error))
