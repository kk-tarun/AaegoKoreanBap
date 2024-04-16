//it will define the mongodb schema
var mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    
    username: {
        type: String,
        required: [true, "Please provide Username!"],
        unique: [true, "Username exists"],
    },
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email exists"],
    },
    number: {
        type: Number,
        required: [true, "Please provide an Number!"],
        unique: [true, "Number exists"],
    },
    address: {
        type: String,
        required: [true, "Please provide an Address!"],
        unique: false, 
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
    
    orders: [
        {
            detail: [ 
                {
                    quantity: {
                        type: Number,
                        required: true,
                    },
                    product: {
                        type: String,
                        required: true,
                    }
                }

            ],
            price: {
                type: Number,
                required: true,
            },
        },
    ],
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;