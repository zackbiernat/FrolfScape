// index.js for rendering app with angular

angular.module('scape-home', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    '127.0.0.1:3000**'
  ]);
});