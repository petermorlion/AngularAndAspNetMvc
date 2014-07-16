(function () {
    'use strict';

    var controllerId = 'customers';
    angular.module('app')
        .controller(controllerId, ['$http', function ($http) {

            var vm = this;
            vm.title = 'Customers, pure Angular';
            vm.names = [];

            $http({
                method: 'GET',
                url: '/api/rest/'
            }).success(function (data, status, headers, config) {
                vm.names = data;
            }).error(function (data, status, headers, config) {
              
            });

        }]);
})();