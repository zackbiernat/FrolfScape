var app = require('./server-config.js').app;
var Courses = require('./server-config.js').Courses;


var port = 3000;

Courses.sync();
app.listen(port);
Courses.create({
  name: 'Abendschein',
  imageUrl: 'https://www.pdga.com/files/course_maps/Abendschein_New_Disc_Golf_Course_Layout_2013.jpg',
  description: "Oak Creek's disc golf course.",
  holes: 18,
  isFree: true,
  address: '999 East Drexel Avenue, Oak Creek, WI, 53154',
})
// Courses.sync({ force: true })
//   .then(function () {
//     console.log('Users table created');
//     return Courses.create({ name: 'zlester' });
//   })
//   .then(function() {
//     console.log('Seeded Courses table');
//     app.listen(port, function() {
//       console.log('node-express-sequelize listening on ' + port);
//     });
//   });



console.log('Server now listening on port ' + port);
