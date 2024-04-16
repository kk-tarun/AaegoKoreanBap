//it will define the mongodb schema
var mongoose = require('mongoose')

const ReviewSchema = new mongoose.Schema({
    review : {
        type:String,
        
    },
    name : {
        type:String,
    }
}
   
);

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;