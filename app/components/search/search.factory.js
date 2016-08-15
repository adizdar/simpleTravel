
(function(){

  'use strict';

  angular.module('travel.search')
         .factory('flightSearchFactory', flightSearchFactory);

  flightSearchFactory.$inject = ['$log', '$http'];

  function flightSearchFactory($log, $http) {
      var _baseUrl = 'http://terminal2.expedia.com:80/x/mflights/search?',
          _apiKey = 'gVXnta1qnAAA0l226zsbCFIJmCW8iWL3',
          _data = {};

      var _factory = {
          getFlightInformation : getFlightInformation
      };

      return _factory;

      /////////////////////

      function getFlightInformation(params) {

        if (!params) {
          $log.error("Params object is undenfined");
          return;
        }

        if ( !params.departureDate ||
             !params.departureAirport ||
             !params.arrivalAirport ) {
            $log.error("Required data is not deffined");
            return;
        }

        params.apikey = _apiKey;

        return $http({
              method: 'GET',
              url: _baseUrl,
              params: params
        });

      }
  }

})();
