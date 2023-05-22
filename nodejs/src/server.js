const path = require('path')
const express = require('express');
var methodOverride = require('method-override')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars');
const app = express();
const port = 3000
const db = require('./config/db/server.js');
const route = require('./routes/server.js');
const multer = require('multer')
const cors = require('cors')
const { send } = require('process');
const Commission = require('./app/models/Commission.js');
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use(cors({origin: true, credentials: true}))

app.get("/commission/image.jpg", (req, res) => {
  res.sendFile(path.join(__dirname, "./upload/image.jpg"));
});

app.get("/commission", (req, res, next) => {
  Commission.find().then(data => {
      res.status(200).json({
          message: "User list retrieved successfully!",
          commission: data
                });
        });
});

// connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));


// template engine
app.engine('hbs', hbs.engine({
  extname: ".hbs",
  helpers:{
    sum: (a, b) => a + b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
console.log('template',path.join(__dirname, 'resource/views'))

// route init
route(app);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})