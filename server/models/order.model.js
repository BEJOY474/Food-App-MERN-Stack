const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  
    name :{
        type : String,
        require : true
    },

    email : {
        type : String,
        require : true
    },

    userId :{
        type : String,
        require : true
    },

    orderItems : [],

    shippingAddress: {
        type : Object
    },

    orderAmount :{
        type : Number,
        require : true
    },

    isDeliverd :{
        type : Boolean,
        require : true,
        default : false
    },

    transactionId :{
        type : String,
        require : true
    },

    createdOn :{
        type : Date,
        default : Date.now
    }
}, {timestamps : true});

exports.Orders = mongoose.model("Orders", orderSchema)