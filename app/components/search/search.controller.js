
(function() {

  'use strict';

  angular.module('travel.search')
         .controller('searchController', searchController);

  searchController.$inject = ['$log', 'flightSearchFactory'];

  function searchController($log, flightSearchFactory) {

    var vm = this;

    // ** Properties

    vm.data = {
       departureDate: '',
       departureAirport: '',
       arrivalAirport: ''
    };

    // ** Functions

    vm.triggerFlightSearch = triggerFlightSearch;

    // ** Functions declerations

    // (init.bind(this))();

    function init() {
      flightSearchFactory
                  .getFlightInformation()
                  .then(flightResultDoneCallback.bind(this), flightResultFailedCallback);
    }

    function triggerFlightSearch(searchData) {

      if (!searchData) {
          $log.error("Search data not defined");
          return;
      }

      searchData.departureDate = searchData.departureDate && !(typeof stringValue) ?
                                 searchData.departureDate.toISOString().split('T')[0] :
                                 searchData.departureDate;

      flightSearchFactory
                  .getFlightInformation(searchData)
                  .then(flightResultDoneCallback.bind(this), flightResultFailedCallback);
    }

    // ** FlightSearchFactory Callbacks

    function flightResultDoneCallback(response) {
        $log.info(response);
    }

    function flightResultFailedCallback(err) {
        $log.error(err);
    }

  }

})();
