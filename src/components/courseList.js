// Course list of all courses in nearby or pertaining to seach results

angular.module('scape-home')
  .component('nearbyCourses', {
    bindings: {
      courses: '<',
      onClick: '<'
    },
    templateUrl: 'src/templates/courseList.html'
  });
