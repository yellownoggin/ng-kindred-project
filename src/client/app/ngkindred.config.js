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
})(ngKindred || (ngKindred = {}));
