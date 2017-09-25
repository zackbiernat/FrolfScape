// Search.js script

angular.module('scape-home')
  .component('searchBar', {

    bindings: {
      result: '<',
      service: '<'
    },

    templateUrl: 'src/templates/search.html',
    controller: 'SearchController'
  })

  .controller('SearchController', function() {
    this.handleClick = () => {
      this.service.search(this.input, (data) => {
        this.result(data);
      });
    };

    this.handleKeyPress = () => {
      this.service.search(this.input, (data) => {
        this.result(data);
      });
    };

  });