//will contain the files with the endpoints
const express = require("express");
const router = express.Router();
// const cors = require("cors");
// router.use(cors());
const {
    getAllUser,
    postCreateUser,
    putUpdateUser,
    findEmail,
} = require('../controllers/user')


router.get("/", getAllUser);


router.post("/", postCreateUser);

// router for email finding
router.get("/:email", findEmail);



router.put("/:email", putUpdateUser);



module.exports = router;