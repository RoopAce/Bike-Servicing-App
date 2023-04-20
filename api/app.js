const express = require("express");
const cors = require('cors');
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
const app = express();
// const auth = require ('./models/auth.js')
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'asjdasdkasd';
const cookieParser = require('cookie-parser');
const morgan = require("morgan");
// require("./src/db/conn");
require("dotenv").config()
// const port = process.env.PORT || 3000;



const db = process.env.MONGOURI;

let port = process.env.PORT;

if (port == null || port == "") {
    port = process.env.SERVER_PORT;
}
mongoose.set('strictQuery', true);
app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"))


app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.log('MongoDB connection error', err);
});


app.get("/test", (req, res) => {
    res.json("hello from RoopAce")
});


app.post('/register', async (req, res) => {
    const { name, email, phoneNumber, password, userType } = req.body;

    try {
        console.log(userType)
        const userDoc = await User.create({
            name,
            email,
            phoneNumber,
            password: bcrypt.hashSync(password, bcryptSalt),
            userType,
        });

        res.json(userDoc);
    } catch (e) {
        res.status(422).json(e);
    }



});



app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            jwt.sign({ email: userDoc.email, id: userDoc._id }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                const cookieData = { token: token, userType: userDoc.userType };
                res.cookie('userData', JSON.stringify(cookieData)).json('pass ok');

                //res.cookie('token', token).json('pass ok');
            });

        } else {
            res.status(422).json('pass not ok');
        }
    } else {
        res.json('Not found');
    }
});



app.listen(port, () => {
    console.log(`server is up and running at port ${port} successfully `);
});