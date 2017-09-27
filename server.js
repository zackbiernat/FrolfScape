var app = require('./server-config.js').app;
var Courses = require('./server-config.js').Courses;
var Reviews = require('./server-config.js').Reviews;


var port = 3000;

Courses.sync();
Reviews.sync();
app.listen(port);


// The following code was used to generate starting data for the courses table. It should only be used as a backup


// Courses.bulkCreate([
//   {
//     name: 'ABENDSHCEIN',
//     imageUrl: 'lib/img/abendschein.jpg',
//     description: "Oak Creek's disc golf course.",
//     holes: 18,
//     isFree: true,
//     address: '999 East Drexel Avenue, Oak Creek, WI, 53154',
//     city: 'Oak Creek',
//     state: 'WI'

//   },
//   {
//     name: 'ESTABROOK',
//     imageUrl: 'https://www.pdga.com/files/styles/large/public/course_photos/IMG_1670a.JPG?itok=K-yJg4q5',
//     description: "East-side urban disc golf along the Estabrook parkway",
//     holes: 18,
//     isFree: false,
//     address: '4400 N. Estabrook Drive, Milwaukee, WI 53211',
//     city: 'Milwaukee',
//     state: 'WI'

//   },
//   {
//     name: 'DRETZKA',
//     imageUrl: 'https://www.pdga.com/files/course_maps/dretzka_winter_wi_map.jpg',
//     description: "Huge disc golf/non-disc golf complex with two playable courses",
//     holes: 27,
//     isFree: false,
//     address: '12020 W Bradley Rd, Milwaukee, WI 53224',
//     city: 'Milwaukee',
//     state: 'WI'
//   },
// ])

// Reviews.bulkCreate([
//       {
//         username: 'Mac',
//         text: "Loved it. Got an ace on hole #14.",
//         strokes: -5,
//         rating: 5,
//         CourseId: 1
//       },
//       {
//         username: 'McBoyle',
//         text: "This course is cool...if you're a baby. Not very challenging",
//         strokes: -1,
//         rating: 2,
//         CourseId: 1
//       },
//       {
//         username: 'The waitress',
//         text: "First time disc golfing. Not sure why there were so many police parked here.",
//         strokes: 5,
//         rating: 4,
//         CourseId: 1
//       },
//       {
//         username: 'Dennis',
//         text: "Almost as great as me. Always room for improvement :D",
//         strokes: -2,
//         rating: 4,
//         CourseId: 2
//       },
//       {
//         username: 'Ponderosa',
//         text: "Not the easiest, unlike my ex",
//         strokes: 0,
//         rating: 4,
//         CourseId: 2
//       },
//       {
//         username: 'The waitress',
//         text: "Did anyone see Dennis here? <3",
//         strokes: 10,
//         rating: 4,
//         CourseId: 2
//       },
//       {
//         username: 'Frank',
//         text: "Lost rumham on hole #5, plz dm me if found",
//         strokes: 4,
//         rating: 3,
//         CourseId: 3
//       },
//       {
//         username: 'Charlie',
//         text: "Disc golfing just makes sense to me",
//         strokes: -11,
//         rating: 5,
//         CourseId: 3
//       },
//       {
//         username: 'The waitress',
//         text: "Got creeped on by a charlie again, gross",
//         strokes: 13,
//         rating: 1,
//         CourseId: 3
//       }


//   ])



console.log('Server now listening on port ' + port);
