//will contain the files with the endpoints
const express = require("express")
const router = express.Router();

const {
    getAllReview,
    postCreateReview,
    
} = require('../controllers/Review')


router.get("/", getAllReview);


router.post("/", postCreateReview);



module.exports = router;