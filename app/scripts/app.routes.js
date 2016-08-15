
(function(){

  'use strict';

  angular.module('simpleTravelApp').config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'components/search/search.html',
        controller: 'searchController',
        controllerAs: 'search'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

})();
