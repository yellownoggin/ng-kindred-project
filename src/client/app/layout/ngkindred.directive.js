var ngKindred;
(function (ngKindred) {
    'use strict';
    function ngkindredShellDirective() {
        return {
            restrict: 'EA',
            templateUrl: '/app/layout/ngkindred-shell.html'
        };
    }
    angular
        .module('ngKindred')
        .directive('ngkindredShell', ngkindredShellDirective);
})(ngKindred || (ngKindred = {}));
