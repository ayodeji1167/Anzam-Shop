const express = require('express')
require('express-async-errors')
const cors = require('cors');
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const colors = require('colors')
const productRouter = require('./routes/productRoutes')
const errorandler = require('./error/errorHandler')

dotenv.config()
const app = express();

app.use(cors())

app.get('/', (req, res) => {
    res.send('Api started')
})
app.use('/api/products', productRouter)


//Not Found
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
})
app.use(errorandler)


const PORT = process.env.PORT || 5000;
const start = async () => {
    await connectDb()

    app.listen(PORT, () => console.log(`server running in ${process.env.NODE_ENV} on ${PORT}`.yellow.bold))
}

start()