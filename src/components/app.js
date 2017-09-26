// app.js, head module
angular.module('scape-home')
  //SERVICES

  //search engine service
  .service('courseFetcher', function() {
    this.search = function(query, callback) {
      //should examine data and respond with a set referring to window.dummyData for now
      console.log(query);
    }
  })
  .service('postReview', function() {
    this.renderPost = (params) => {
      let review = {
        text: params.input.text,
        username: params.input.username,
        rating: params.input.rating,
        strokes: params.input.strokes
      };
      console.log(review);
      console.log('this',this)
      this.currentCourse.reviews.push(review);
    }
  })

  //Post review service

  .controller('AppController', ['courseFetcher', function(courseFetcher) {
    //set default values
    this.courses = window.dummyData;
    this.currentCourse = this.courses[0];
    this.reviews = this.currentCourse.reviews;

    //define methods to be passed down

    //search engine
    this.fetchService = courseFetcher;
    this.fetchResults = (data) => {
      this.courses = data;
      this.currentCourse = data[0];
      this.reviews = this.currentCourse.reviews;
    };

    //clickable course selector
    this.selectCourse = (course) => {
      this.currentCourse = course;
      this.reviews = this.currentCourse.reviews;
    };

    //review post handler
    this.renderPost = (params) => {
      let review = {
        text: params.input.text,
        username: params.input.username,
        rating: params.input.rating,
        strokes: params.input.strokes
      };
      console.log(review);
      console.log('this',this)
      this.currentCourse.reviews.unshift(review);
    }

    courseFetcher.search('Milwaukee', this.fetchResults);

  }])

  .component('app', {
    templateUrl: '/src/templates/app.html',
    controller: 'AppController',
    something: 'something'
});




