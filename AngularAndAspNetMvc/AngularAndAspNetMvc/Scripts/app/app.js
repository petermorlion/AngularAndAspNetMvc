(function () {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',        // animations
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
    ]);

    app.run(['$route', function ($route) {
        // Include $route to kick start the router.
    }]);
})();