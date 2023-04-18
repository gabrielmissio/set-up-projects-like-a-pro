if (process.env.IS_LOCALHOST === 'true') require('dotenv').config()

console.log(JSON.stringify(Number(process.env.PORT)))
