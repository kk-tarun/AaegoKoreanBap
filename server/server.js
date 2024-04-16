require('dotenv').config();
var express = require('express');
var cors = require('cors')

const connectDB = require('./config/db');
var app = express();
const Review = require('./routes/Review');
const User = require('./routes/user');

connectDB();
app.use(cors({origin: true, credentials: true}));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    res.send("Server is hui hui up and running!");
})

app.use("/api/review", Review);
app.use("/api/register", User);
    
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})
