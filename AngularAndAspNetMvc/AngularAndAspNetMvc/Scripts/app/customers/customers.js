(function () {
    'use strict';

    var controllerId = 'customers';
    angular.module('app')
        .controller(controllerId, ['$http', function ($http) {

            var vm = this;
            vm.title = 'Customers, pure Angular';

            //$http({
            //    method: 'GET',
            //    url: '/breeze/matches/Statistics'
            //}).success(function (data, status, headers, config) {
                
            //}).error(function (data, status, headers, config) {
                
            //});

        }]);
})();