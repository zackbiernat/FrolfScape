// app.js, head module


angular.module('scape-home')
  //SERVICES

  //search engine service
  .service('courseFetcher', function($http, $window) {
    this.search = function(query, callback) {
      let urlString = 'http://127.0.0.1:3000/courses'
      if (query) {
        urlString += '?name='+query
      }
      console.log('this guy', urlString)
      $http.get(urlString,
        {
          headers: {
            'access-control-allow-origin': '*',
            //'Range': 'data=0-1' TODO, figure out range
          }
        }
      ).then(function successCallback(response) {
          console.log('response', response);
          callback(response.data);
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
      console.log(query);
    }
  })

  .controller('AppController', function(courseFetcher) {
    //define methods to be passed down

    //search engine
    this.fetchService = courseFetcher;
    this.fetchResults = (data) => {
      console.log('this',this)
      this.courses = data;
      this.currentCourse = data[0];
      // this.reviews = this.currentCourse.reviews; TODO fix reviews
    };

    //clickable course selector
    this.selectCourse = (course) => {
      this.currentCourse = course;
      //this.reviews = this.currentCourse.reviews; TODO fix reviews
    };

    //review post handler
    this.renderPost = (params) => {
      let review = {
        text: params.input.text,
        username: params.input.username,
        rating: params.input.rating,
        strokes: params.input.strokes
      };

      this.currentCourse.reviews.unshift(review);
    }

    courseFetcher.search('Dretzka', this.fetchResults);

  })

  .component('app', {
    templateUrl: '/src/templates/app.html',
    controller: 'AppController',
    something: 'something'
});




