//files which have the methods for the endpoint to communicate with the database
const User = require('../models/user');

// getAllUser: The find() method will return all the User in the collection. If the collection is empty then it will return a 404 error.
exports.getAllUser = (req, res) => {
    console.log(req.body)
    User.find()
        .then((User) => res.json(User))
        .catch((err) => {
            res
                .status(404)
                .json({ message: "User not found", error: err.message })
        });
};


// postCreateUser: The create() method will create a User and return a success message. Otherwise, it will return a 400 error.
exports.postCreateUser = (req, res) => {
    User.create(req.body)
        .then((data) => {
            res.json({ message: "User added successfully", data })
        })
        .catch((err) => {
            res
                .status(400)
                .json({ message: "Failed to add User", error: err.message })
        });
};

// putUpdateUser: The findByIdAndUpdate() will require two parameters the id and data of the User to be updated. The id parameter will be extracted from req.params.id.
exports.putUpdateUser = (req, res) => {
    var email = req.params.email;
    User.findOneAndUpdate({ email: email }, req.body)
        .then((data) => {
            res.json({ message: "Updated successfully", data })
        })
        .catch((err) => {
            res
                .status(400)
                .json({ message: "Failed to update User", error: err.message })
        });
};



// it finds the user corresponding to email at login
exports.findEmail = (req, res) => {
    var email = req.params.email;
    User.findOne({ email: email })
        .then((data)=>{
            if(data){
                res
                .status(200)
                .json({ message: "Email successfully found!", data })
            }
            else{
                res
                .json({ message: "Email not found!" })
                .status(404)
            }
        })
        .catch((err) => {
            res
                .status(500)
                .json({ error: err.message })
        })
};