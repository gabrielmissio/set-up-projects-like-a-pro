if (process.env.IS_LOCALHOST === 'true') require('dotenv').config()

const app = require('./app')

const PORT = Number(process.env.PORT)

app.listen(PORT, () => console.log(`running on port ${PORT}`))
