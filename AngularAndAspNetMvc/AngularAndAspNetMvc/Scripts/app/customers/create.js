(function () {
    'use strict';

    var controllerId = 'createCustomer';
    angular.module('app')
        .controller(controllerId, ['$http', function ($http) {

            var vm = this;
            vm.title = 'Create Customer';

            //$http({
            //    method: 'GET',
            //    url: '/breeze/matches/Statistics'
            //}).success(function (data, status, headers, config) {

            //}).error(function (data, status, headers, config) {

            //});

        }]);
})();