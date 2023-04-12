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
// require("./src/db/conn");

// const port = process.env.PORT || 3000;


app.use(express.json());
app.use(cookieParser());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
}));

mongoose.connect("mongodb://127.0.0.1:27017");
// const static_path = path.join(__dirname, "../public" );
// app.use(express.static(static_path));
// app.set("view ")



app.get("/test", (req, res) => {
    res.json("hello from RoopAce")
});


app.post('/register', async (req,res) => {
    const {name,email,phoneNumber,password,userType} = req.body;

    try {
        console.log(userType)
        const userDoc = await User.create({
            name,
            email,
            phoneNumber,
            password:bcrypt.hashSync(password, bcryptSalt),
            userType,
        });

        res.json(userDoc);
    }catch (e){
        res.status(422).json(e);
    }
    

    
});
 


app.post('/login', async (req,res) => {
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err,token) => {
                if (err) throw err;
                const cookieData = {token: token, userType: userDoc.userType};
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

// //logout
// app.get("/logout", (req, res) => {
//     res.json("hello my logout page");
//     res.clearCookie('jwtoken', { path: '/'})
//     res.status(200).send('user Logout');
// });

app.listen(4000);

