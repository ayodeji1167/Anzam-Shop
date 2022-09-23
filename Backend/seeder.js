const mongoose = require('mongoose');
const dotenv = require('dotenv')
const colors = require('colors')
const users = require('./data/users')
const products = require('./data/Product')

const UserModel = require('./models/UserModel')
const ProductModel = require('./models/ProductModel')
const OrderModel = require('./models/OrderModel')

const connectDb = require('./config/db');
dotenv.config()

connectDb()

const importData = async () => {

    try {
        await UserModel.deleteMany()
        await ProductModel.deleteMany()
        await OrderModel.deleteMany()

        const createdUser = await UserModel.insertMany(users);
        const adminUser = createdUser[0]._id;

        const sampleProd = products.map(prd => {
            return { ...prd, user: adminUser }
        })

        await ProductModel.insertMany(sampleProd);

        console.log(`Data Imported`.green.inverse);
    } catch (error) {

        console.error(`${error}`.red.inverse);
    }
}

const destroyData = async () => {

    try {
        await UserModel.deleteMany()
        await ProductModel.deleteMany()
        await Order.deleteMany()


        console.log(`Data Destroyed`.green.inverse);
    } catch (error) {

        console.error(`${error}`.red.inverse);
    }
}

if (process.argv[2] === '-d') {
    destroyData()
}
else {
    importData()
}