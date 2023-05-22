const Course = require('../models/Course')
const {mongooseToObject, mutipleMongooseToObject} = require('../../resource/views/utils/mongoose')
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
class MeController{
    //[GET] me/stored/courses
    storedCourses(req, res, next){
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deleteCount]) =>
                 res.render('me/edit-courses', {
                deleteCount,
                courses: mutipleMongooseToObject(courses),
            })
        )
            .catch(next)
    }
    trashCourses(req, res, next){
        Course.findDeleted({})
            .then(courses => res.render('me/trash', {
                courses: mutipleMongooseToObject(courses)
            }))
            .catch(next);
    }
}

module.exports = new MeController;