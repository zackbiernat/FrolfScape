// app.js, head module


angular.module('scape-home')
  //SERVICES

  //search engine service
  .service('courseFetcher', function($http, $window) {
    this.search = function(query, callback) {
      let urlString = 'http://127.0.0.1:3000/courses'
      if (query) {
        query = query.toUpperCase();
        urlString += '?name='+query
        console.log(query)
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
          console.log('Could not find any courses');
        });
    }
  })

  //updates reviews
  .service('reviewFetcher', function($http, $window) {
    this.search = function(id, callback) {
      let urlString = 'http://127.0.0.1:3000/reviews'
      if (!id) {
        console.log("Huge error")
      } else {
        urlString += '?courseId='+id;
        $http.get(urlString,
        {
          headers: {
            'access-control-allow-origin': '*',
            //'Range': 'data=0-1' TODO, figure out range
          }
        }
      ).then(function successCallback(response) {
          console.log('response', response.data);
          callback(response.data);
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    }
  }
  })

  // Sends new reviews to server
  .service('reviewPoster', function($http, $window) {
    this.post = function(review, callback) {
      let urlString = 'http://127.0.0.1:3000/reviews'
      if (!review) {
        console.log("Huge error")
      } else {
        $http.post(urlString, review)
        .then(function successCallback(review) {
          console.log('response', review);
          //callback(response.data);
      }, function errorCallback(review) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

        }
      }
    })


  .controller('AppController', function(courseFetcher, reviewFetcher, reviewPoster) {
    //define methods to be passed down

    //search engine
    this.fetchService = courseFetcher;
    this.fetchResults = (data) => {
      this.courses = data;
      this.currentCourse = data[0];
      this.currentId = this.currentCourse.id;
      this.fetchReviews.search(this.currentId, this.handleReviewFetch);

    };

    //clickable course selector
    this.selectCourse = (course) => {
      this.currentCourse = course;
      this.currentId = this.currentCourse.id;
      this.fetchReviews.search(this.currentId, this.handleReviewFetch);

    };


    //review fetcher for current course
    this.fetchReviews = reviewFetcher;
    this.handleReviewFetch = (data) => {
      this.reviews = data;
    }

    //review post handler
    this.reviewPost = reviewPoster;
    this.renderPost = (params) => {
      let review = {
        text: params.input.text,
        username: params.input.username,
        rating: params.input.rating,
        strokes: params.input.strokes,
        courseId: this.currentId
      };
      //Make post request
      this.reviewPost.post(review)
      //Make get request
      this.fetchReviews.search(this.currentId, this.handleReviewFetch);

    }

    courseFetcher.search(null, this.fetchResults);
    console.log('current course id', this.currentId)

  })

  .component('app', {
    templateUrl: '/src/templates/app.html',
    controller: 'AppController',
    something: 'something'
});




