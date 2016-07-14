// TODO: nginject & other notes or inclusions
namespace ngKindred {
    'use strict';

        function ngkindredShellDirective() {

            return {
                restrict: 'EA',
                templateUrl: '/app/layout/ngkindred-shell.html'
            }
        }

    angular
        .module('ngKindred')
        .directive('ngkindredShell', ngkindredShellDirective);

}
