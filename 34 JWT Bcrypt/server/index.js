const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
app.use(bodyParser.json());
app.use(cors());

//mongoose model
let validateEmail = function(email) {
    let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const Users = new mongoose.model('Users',new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        minlength: 5,
        required: true,
    },
    isAdmin: {
        type: Boolean
    }
}))
//VERIFY JWT token
const verifyJWT = async(req,res,next)=>{
    const token = req.headers['x-access-token'];
    if (!token) {
        res.send({message: 'you may need token to get here!'});
    }
    else{
       jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if (err) {
                res.send({auth:false,message: 'authentication failed!'})
            }
            else{
                req.userId = decoded.id;
                next();
            }
       })
    }
}

//register - sign up
app.post('/api/register',async(req,res)=>{
    const{username,password,email} = req.body;
    const existedUsername = await Users.findOne({username: username});
    const existedEmail = await Users.findOne({email: email});
    if (existedUsername) {
        res.send({
            auth: false,
            message: 'username already exists!'
        })
        return;
    }
    if (existedEmail) {
        res.send({
            auth: false,
            message: 'email already used!'
        })
        return;
    }
    const salt = await bcrypt.genSalt(10); //500ms
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await Users({
        username: username,
        email: email,
        password: hashedPassword,
        isAdmin: false
    })
    await newUser.save();
    res.send({
        auth: true,
        data: newUser,
        message: 'user signed up successfully!',
    })
});

//login - sign in
app.post('/api/login',async(req,res)=>{
    const{username,password} = req.body;
    const existedUsername = await Users.findOne({username: username});
    if (!existedUsername) {
        res.send({auth:false,message:'username not found!'})
    }
    else{
        const isValid = await bcrypt.compare(password,existedUsername.password);
        if (!isValid) {
            res.send({auth:false, message: 'password is incorrect!'});
        }
        else{
            //username, password +
            const id =  existedUsername._id;
            const token =  jwt.sign({id}, process.env.SECRET_KEY,{
                expiresIn: '1d'
            })
            res.send({
                auth:true,
                user: {
                    id: existedUsername._id,
                    username: existedUsername.username,
                    email: existedUsername.email,
                    isAdmin: existedUsername.isAdmin
                },
                token: token,
                message: 'user logged in successfully!'
            })
        }
    }
})

//get users
app.get('/api/users',verifyJWT,async(req,res)=>{
    const users = await Users.find();

    res.json({
        data: users,
        message: 'data get successfully!'
    })
})
//logut
app.post('/api/logout',(req,res)=>{
    const{token} = req.headers['x-access-token'];
    jwt.destroy(token);
})

app.listen(process.env.PORT,()=>{
    console.log(`App listening on PORT:${process.env.PORT}`);
})
mongoose.connect(process.env.DB_KEY).then(()=>{
    console.log('Mongo DB connected!');
}).catch((err)=>{
    console.log(err);
})