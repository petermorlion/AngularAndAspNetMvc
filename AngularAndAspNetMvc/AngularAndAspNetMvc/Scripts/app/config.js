(function () {
    'use strict';

    var app = angular.module('app');

    // For use with the HotTowel-Angular-Breeze add-on that uses Breeze
    var remoteServiceName = 'breeze/matches';

    var config = {};

    app.value('config', config);

    // Collect the routes
    app.constant('routes', getRoutes());

    // Configure the routes and route resolvers
    app.config(['$routeProvider', 'routes', routeConfigurator]);

    function routeConfigurator($routeProvider, routes) {
        routes.forEach(function (r) {
            $routeProvider.when(r.url, { templateUrl: r.templateUrl });
        });
        $routeProvider.otherwise({ redirectTo: '/customers' });
    }

    function getRoutes() {
        return [
            {
                url: '/customers',
                templateUrl: '/Scripts/app/customers/customers.html'
            },
            {
                url: '/customers/create',
                templateUrl: '/Scripts/app/customers/create.html'
            }
        ];
    }
})();