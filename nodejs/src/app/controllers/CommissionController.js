const Commission = require('../models/Commission')
const {mongooseToObject} = require('../../resource/views/utils/mongoose')
const express = require('express');
var bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors')
const multer = require('multer')
const DIR = '../../upload'
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use(cors({origin: true, credentials: true}))

class CommissionController{

//     create(req, res, next){
//        Commission.find({ slug: req.params.slug})
//     .then(commissions => res.json(commissions))
//     .catch(next)
// }
// /commission/show
async show(req, res, next){
    const name = req.body.name
    const type = req.body.type
    const price = req.body.price
    const image = req.body.image 
    const commission = new Commission ({
        name: name, 
        price: price,
        type: type, 
        image: image})
    console.log("Commission Info:", commission)
    try {
         await commission.save().then(result => {
            res.status(201).json({
                message: "Commission registered successfully!",
                commissionCreated: {
                    _id: result._id,
                    profileImg: result.profileImg
                }
            })
        }).catch(err => {
            console.log(err),
                res.status(500).json({
                    error: err
                });
        });
    }
    catch(err){
        console.log(err)
    }
}
    // commission/create
    create(req, res, next){
        Commission.find({ slug: req.params.slug})
        .then(commissions => res.json(commissions))
        .catch(next)
    }
    // commission/delete
   async delete(req , res, next){
        const id = req.params.id
       await Commission.findByIdAndRemove(id).exec()
        res.send(id)
    }
    // sendUpload(req, res, next){
    //   res.send('dang gui upload')
    // }

    //commission/:slug
        empty(req, res) {
            res.send({status : true, message : "sample JSON"})}
    }

module.exports = new CommissionController;