var ngKindred;
(function (ngKindred) {
    'use strict';
    var NgkindredController = (function () {
        function NgkindredController(state, rootScope) {
            this.state = state;
            this.rootScope = rootScope;
            var vm = this;
            vm.test = 'Hello world';
            vm.changeTemplates();
        }
        NgkindredController.prototype.changeTemplates = function () {
            var _this = this;
            this.rootScope.$on('$stateChangeStart', function (event, toState) {
                console.log(toState.name, 'state name');
                var n = toState.name.indexOf('ngKindred');
                var i = toState.name.indexOf('pagetemplates');
                console.log(toState.name, i);
                if (i >= 0) {
                    _this.usengKindredShell = false;
                    _this.usePageTemplatesShell = true;
                }
                else {
                    _this.usengKindredShell = true;
                    _this.usePageTemplatesShell = false;
                }
            });
        };
        ;
        NgkindredController.$inject = ['$state', '$scope', '$timeout', '$rootScope'];
        return NgkindredController;
    }());
    angular
        .module('ngKindred')
        .controller('NgkindredController', NgkindredController);
})(ngKindred || (ngKindred = {}));
