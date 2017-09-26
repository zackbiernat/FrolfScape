var app = require('./server-config.js').app;
var Courses = require('./server-config.js').Courses;


var port = 3000;

Courses.sync();
app.listen(port);


// The following code was used to generate starting data for the courses table. It should only be used as a backup


// Courses.bulkCreate([
//   {
//     name: 'Abendschein',
//     imageUrl: 'https://www.pdga.com/files/course_maps/Abendschein_New_Disc_Golf_Course_Layout_2013.jpg',
//     description: "Oak Creek's disc golf course.",
//     holes: 18,
//     isFree: true,
//     address: '999 East Drexel Avenue, Oak Creek, WI, 53154',
//   },
//   {
//     name: 'Estabrook',
//     imageUrl: 'https://www.pdga.com/files/styles/large/public/course_photos/IMG_1670a.JPG?itok=K-yJg4q5',
//     description: "East-side urban disc golf along the Estabrook parkway",
//     holes: 18,
//     isFree: false,
//     address: '4400 N. Estabrook Drive, Milwaukee, WI 53211',

//   },
//   {
//     name: 'Dretzka',
//     imageUrl: 'https://www.pdga.com/files/course_maps/dretzka_winter_wi_map.jpg',
//     description: "Huge disc golf/non-disc golf complex with two playable courses",
//     holes: 27,
//     isFree: false,
//     address: '12020 W Bradley Rd, Milwaukee, WI 53224',
//   },
// ])
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
