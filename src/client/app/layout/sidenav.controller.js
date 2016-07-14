var ngKindred;
(function (ngKindred) {
    var layout;
    (function (layout) {
        'use strict';
        var SideNavNgKindred = (function () {
            function SideNavNgKindred($mdMedia, $mdSidenav) {
                this.$mdMedia = $mdMedia;
                this.$mdSidenav = $mdSidenav;
                this.sidenavLockedOpenValue = $mdMedia('gt-sm');
            }
            SideNavNgKindred.prototype.toggleLeftMenu = function () {
                if (this.$mdMedia('gt-sm')) {
                    this.sidenavOpenValue = false;
                    this.sidenavLockedOpenValue = !this.sidenavLockedOpenValue;
                    console.log(this.sidenavLockedOpenValue);
                }
                else {
                    this.sidenavOpenValue = !this.sidenavOpenValue;
                }
            };
            SideNavNgKindred.$inject = ['$mdMedia', '$mdSidenav'];
            return SideNavNgKindred;
        }());
        angular
            .module('ngKindred.layout')
            .controller('SideNavNgKindredController', SideNavNgKindred);
    })(layout = ngKindred.layout || (ngKindred.layout = {}));
})(ngKindred || (ngKindred = {}));
