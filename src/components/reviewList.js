//ReviewList

//Should eventually be rendered from data on the server

angular.module('scape-home')
  .component('reviewList', {
    bindings: {
      reviews: '<',
    },
    templateUrl: 'src/templates/reviewList.html'
  });