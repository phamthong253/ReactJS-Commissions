const Course = require('../models/Course')

class NewsController{

    //[GET] /news
    index(req, res, next){

       Course.find({})


        .then(courses => {
            courses = courses.map(course => course.toObject())
            res.render('news', {courses})
        })
        .catch(next)
        
        // res.render('news');
    }

    show(req, res){
        res.send('More Details!!!');
    }
}

module.exports = new NewsController;