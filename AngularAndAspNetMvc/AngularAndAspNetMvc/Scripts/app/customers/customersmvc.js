(function () {
    'use strict';

    var controllerId = 'customersmvc';
    angular.module('app')
        .controller(controllerId, ['$http', function ($http) {

            var vm = this;
            vm.title = 'Customers, Angular and MVC';

        }]);
})();