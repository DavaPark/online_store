require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./migrations/20230404205943-Create-Users-table')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHarndler = require('./middleware/ErrorHandingMiddleware')



const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)


// Обработка ошибок, последний Middleware
app.use(errorHarndler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    } catch (e){
        console.log(e)
    }
}

start()

