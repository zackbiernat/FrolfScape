//Review List Entry

//Should represent a card to which a review has been rendered

angular.module('scape-home')
  .component('reviewListEntry', {
    bindings: {
      review: '<',
    },
    controller: 'EntryController',
    templateUrl: 'src/templates/reviewListEntry.html'
})

