// Headline Course.js

angular.module('scape-home')
  .component('headCourse', {
    // TODO
    bindings: {
      course: '<'
    },
    templateUrl: 'src/templates/headCourse.html',
    controller: 'ReviewController'
  })

  .controller('ReviewController', function() {
    var outer = this;
    this.handleSubmit = function(target) {

      console.log(outer)
      //outer.onClick(target);
    };
  });