// app.js, head module
angular.module('scape-home')
  .service('courseFetcher', function($http, $window) {
    this.search = function(query, callback) {
      //should examine data and respond with a set referring to window.dummyData for now
      console.log(query);
    }
  })
  .controller('AppController', ['courseFetcher', function(courseFetcher) {
    this.courses = window.dummyData;
    this.currentCourse = this.courses[0];
    this.reviews = this.currentCourse.reviews;
    this.fetchService = courseFetcher;
    this.fetchResults = (data) => {
      this.courses = data;
      this.currentCourse = data[0];
      this.reviews = this.currentCourse.reviews;
    };
    this.selectCourse = (course) => {
      this.currentCourse = course;
      this.reviews = this.currentCourse.reviews;
    };

    courseFetcher.search('Milwaukee', this.fetchResults);

  }])

  .component('app', {
    templateUrl: '/src/templates/app.html',
    controller: 'AppController'
});




