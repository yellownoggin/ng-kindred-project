namespace ngKindred {
    'use strict';

    function ngkindresPageTemplatesDirective() {
        return {
            restrict: 'EA',
            templateUrl: 'app/ngkindred-page-templates/ngkindred-page-templates-shell.html'
        }
    }

    angular
        .module('ngKindred')
        .directive('ngkindredPageTemplates', ngkindresPageTemplatesDirective)
}
