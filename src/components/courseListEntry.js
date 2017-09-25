//Course entry card

angular.module('scape-home')
  .component('courseListEntry', {
    bindings: {
      course: '<',
      onClick: '<'
    },

    controller: 'EntryController',
    templateUrl: 'src/templates/courseListEntry.html'
  })

  .controller('EntryController', function() {
    var outer = this;
    this.handleClick = function(target) {
      outer.onClick(target);
    };
  });