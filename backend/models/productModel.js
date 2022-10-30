const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require:[true, "Please Enter product name"],
        trim: true
    },
    description: {
        type: String,
        require:[true, "Please Enter product description"]
    },
    price: {
        type: Number,
        require: [ true ,  "Please Enter the product price"],
        maxLength: [8, "Price cannot exceed 8 characters"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id:{
                type:String,
                require: true
            },
            uri:{
                type:String,
                require: true
            }
        
        }
    ],
    category: {
        type: String,
        require:[true,"Please enter Product Category "]
    },
    stock: {

        type: Number,
        require:[true,"Enter the Product stock"],
        maxLength:[4,"Product stock cannot exceed 4 characters"],
        default: 1
    },
    numOfReviews : {
        type:Number,
        default: 0
    },
    reviews: [
        {
            name:{
                type: String,
                required: true
            },
            rating:{
                type:String,
                required: true
            },
            comment:{
                type: String,
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})



module.exports = mongoose.model("Product", productSchema);