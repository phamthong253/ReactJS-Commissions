const Course = require('../models/Course')
const {mongooseToObject} = require('../../resource/views/utils/mongoose')
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
class CourseController{

    //[GET] /courses/:slug
    show(req, res, next){
        Course.findOne({ slug: req.params.slug})
        .then(course =>{
            res.render('courses/show.hbs', {course: mongooseToObject(course)})
        })
        .catch(next)
    }
    //[GET] /slug:create
    create(req, res, next){
       res.render('courses/create')
    
    }
    //[POST] /slug:store
    store(req, res, next){
        const formData = req.body
        const course = new Course(formData)
        course.save()
            // .then(() => res.direct('/'))
    }
    edit(req, res, next){
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {
            course: mongooseToObject(course)
        }))
        .catch(next);
    }
    update(req, res, next){
        Course.updateOne({ _id: req.params.id}, req.body)
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)
    }

    destroy(req,res,next){
        Course.delete({_id: req.params.id})
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)
    }
    restore(req,res,next){
        Course.restore({_id: req.params.id})
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next)
    }
}

module.exports = new CourseController;