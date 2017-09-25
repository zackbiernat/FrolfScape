// index.js for rendering app with angular

angular.module('scape-home', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
  ]);
});