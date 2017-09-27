var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('FrolfScape', 'zack', 'password', { dialect: 'sqlite', storage: 'lib/data/dataset.sqlite' });

// var sequelizeTransforms = require('sequelize-transforms');
// sequelizeTransforms(sequelize);

const Courses = sequelize.define('Courses', {
  name: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  description: Sequelize.STRING,
  holes: Sequelize.INTEGER,
  isFree: Sequelize.BOOLEAN,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING
});

const Reviews = sequelize.define('Reviews', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  strokes: Sequelize.INTEGER,
  rating: Sequelize.INTEGER,
  courseId: Sequelize.INTEGER
});

//Reviews.belongsTo(Courses);

//allow for CORS headers on response
app.use(cors());
//parse data into manageable JSON
app.use(bodyParser.json());
//app.use(express.json());

app.use(express.static(__dirname + "/FrolfScape"));

app.get('/courses', function(req, res, next) {
  let results = [];
  let query = req.query.name;

  if (!query) {
    console.log('No query made, sending all data');
    sequelize.query("SELECT * FROM `Courses`", { type: sequelize.QueryTypes.SELECT})
    .then(course => {
      //results.push(course)
      res.send(course);
    })

  } else {

    Courses.findAll({
      where: {
        $or: [{
          city: {
            $like: '%'+query+'%'
          }
        },
        {
          name: {
            $like: '%'+query+'%'
          }
        }
        ]
      }
    }).then(function(result) {
      console.log('result', result)
      for (var i = 0; i < result.length; i++) {
        results.push(result[i].dataValues);
      }
      res.send(results);
    })

  }

});


app.get('/reviews', function(req, res, next) {

  let results = [];
  let courseId = req.query.courseId;

  Reviews.findAll({
    where: {
      courseId: courseId
    },
    order: [['updatedAt', 'DESC']]
  }).then(function(result) {
    for (var i = 0; i < result.length; i++) {
      results.push(result[i].dataValues);
    }
  }).then(function() {
    res.send(results);
  })

});

app.post('/reviews',
  function(req, res) {
    Reviews.create({
      username: req.body.username,
      text: req.body.text,
      strokes: req.body.strokes,
      rating: req.body.rating,
      courseId: req.body.courseId
    })
    res.send('Received post')
});

module.exports = {
  app: app,
  Courses: Courses,
  Reviews: Reviews

};
