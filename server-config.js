var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('FrolfScape', 'zack', 'password', { dialect: 'sqlite', storage: 'lib/data/dataset.sqlite' });

const Courses = sequelize.define('Courses', {
  name: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  description: Sequelize.STRING,
  holes: Sequelize.INTEGER,
  isFree: Sequelize.BOOLEAN,
  address: Sequelize.STRING
});

let results = [];

// sequelize.query("SELECT * FROM `Courses`", { type: sequelize.QueryTypes.SELECT})
//   .then(course => {
//     results.push(course)
//   })
//results.push('it works!!');
app.get('/courses', function(req, res, next) {
  console.log(req.query);
  let query = req.query.name;
  if (query.charAt(query.length -1) === '/') {
    query = query.slice(0, -1);
  }
  // sequelize.query("SELECT * FROM `Courses` WHERE name = `query`", { type: sequelize.QueryTypes.SELECT})
  // .then(course => {
  //   results.push(course)
  // })
  Courses.findAll({
    where: {
      name: query
    }
  }).then(function(result) {
    console.log(result[0].dataValues)
  })
  res.send(results);
});

module.exports = {
  app: app,
  Courses: Courses
};
