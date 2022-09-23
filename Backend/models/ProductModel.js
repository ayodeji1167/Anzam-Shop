const { Schema, model, default: mongoose } = require('mongoose')

const reviewSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0
    },

    comment: {
        type: String,
        required: true,
    },
}, { timeStamps: true });

const ProductSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },


    brand: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,

    },

    description: {
        type: String,
        required: true,

    },

    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0
    },

    numReviews: {
        type: Number,
        required: true,
        default: 0
    },

    price: {
        type: Number,
        required: true,
        default: 0
    },

    countInStock: {
        type: Number,
        required: true,
        default: 0
    },


}, { timeStamps: true })

const ProductModel = model('Product', ProductSchema)
module.exports = ProductModel