const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const SlidersSchema = new mongoose.Schema({
    name: String,
    url: String
})
const SliderModel = new mongoose.model('Sliders',SlidersSchema);

app.get('/sliders',async(req,res)=>{
    const sliders = await SliderModel.find();
    res.status(200).send({
        message: 'data get success!',
        data: sliders
    })
})
app.post('/sliders',async(req,res)=>{
    const{name,url} = req.body;
    const newSlider = new SliderModel({
        name: name,
        url: url
    })
    await newSlider.save();
    res.status(201).send('slider posted successfully!')
})

app.listen(process.env.PORT,()=>{
    console.log(`App listening on PORT: ${process.env.PORT}`);
})
mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log('Mongo DB Connected!');
}).catch((err)=>{
    console.log(err);
})