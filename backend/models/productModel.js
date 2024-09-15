import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
});

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    heroImage: {
        type: String,
        required: false,
    },
    brand: {
        type: String,
        required: true,
    },
    style: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    homeSpace: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    length: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    width: {
        type: Number,
        required: true,
    },
    material: {
        type: String,
        required: true,
    },
    numReviews: {
        type: Number,
        required: false,
        default: 0,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        required: true,
        default: 0,
    },
},  {
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

export default Product;