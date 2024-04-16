//files which have the methods for the endpoint to communicate with the database
const Review = require('../models/Review');

// getAllReview: The find() method will return all the Review in the collection. If the collection is empty then it will return a 404 error.
exports.getAllReview = (req, res) => {
    Review.find()
        .then((Review) => res.json(Review))
        .catch((err) => {
            res
                .status(404)
                .json({ message: "Review not found", error: err.message })
        });
};


// postCreateReview: The create() method will create a Review and return a success message. Otherwise, it will return a 400 error.
exports.postCreateReview = (req, res) => {
    Review.create(req.body)
        .then((data) => {
            res.json({ message: "Review added successfully", data })
        })
        .catch((err) => {
            res
                .status(400)
                .json({ message: "Failed to add Review", error: err.message })
        });
};

