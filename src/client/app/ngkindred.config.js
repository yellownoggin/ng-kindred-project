var ngKindred;
(function (ngKindred) {
    'use strict';
    angular
        .module('ngKindred')
        .config(initRouter)
        .config(initTheme);
    function initRouter($locationProvider, $urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
    }
    function initTheme($mdThemingProvider) {
        $mdThemingProvider
            .theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('red');
    }
})(ngKindred || (ngKindred = {}));
