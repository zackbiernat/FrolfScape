// Headline Course.js

angular.module('scape-home')
  .component('headCourse', {

    bindings: {
      course: '<',
      service: '<',
      reviews: '<',
      handler: '<'
    },

    templateUrl: 'src/templates/headCourse.html',
    controller: 'ReviewController'
  })

  .controller('ReviewController', function() {
    var outer = this;
    this.handleSubmit = function(target) {
      this.service(outer);
      //outer.onClick(target);
    };
    this.handleReview = function() {

      this.reviews(outer.id, this.handler);
    }

  });