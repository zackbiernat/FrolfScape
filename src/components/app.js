// app.js, head module
angular.module('scape-home')
  .component('app', {
    templateUrl: 'scr/templates/app.html',
    controller: 'AppController'
  })

  .controller('AppController', function(courseFetcher) {
    this.fetchService = courseFetcher;
  });

  this.selectCourse = (course) => {
    this.currentCourse = course;
  };

  courseFetcher.search('Milwaukee', this.searchResults);
