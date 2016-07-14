var ngKindred;
(function (ngKindred) {
    'use strict';
    var MenuFactory = (function () {
        function MenuFactory() {
            this.sections = [];
            this.getSections();
        }
        MenuFactory.prototype.selectSection = function (section) {
            this.openedSection = section;
        };
        MenuFactory.prototype.toggleSelectSection = function (section) {
            this.openedSection = (this.openedSection === section ? null : section);
        };
        MenuFactory.prototype.isSectionSelected = function (section) {
            return this.openedSection === section;
        };
        MenuFactory.prototype.selectPage = function (section, page) {
            this.currentPage = page;
            this.currentSection = section;
        };
        MenuFactory.prototype.isPageSelected = function (page) {
            return this.currentPage === page;
        };
        MenuFactory.prototype.getSections = function () {
            this.sections.push({
                name: 'Starter Templates',
                type: 'heading',
                children: [
                    {
                        name: 'Ng Boostrap Examples',
                        type: 'link',
                        id: 'main-toolbars',
                        url: '#/demos/ng-boostrap-examples'
                    }
                ]
            }, {
                name: 'Workshop Components',
                type: 'heading',
                children: [
                    {
                        name: 'Main Toolbars',
                        type: 'link',
                        id: 'main-toolbars',
                        url: '#/demos/angular-material-main-toolbar'
                    },
                    {
                        name: 'DH Simple GD',
                        type: 'link',
                        id: 'functional design',
                        url: '#/demos/dynamic-header-simple-gd'
                    },
                    {
                        name: 'Google Analytics Hero',
                        type: 'link',
                        id: 'functional design',
                        url: '#/demos/google-analytics-hero'
                    }
                ]
            }, {
                name: 'Workshop Templates',
                type: 'heading',
                children: [
                    {
                        name: 'vCard Tripwire Mag ',
                        type: 'link',
                        id: 'site-templates',
                        url: '#/demos/templates/vcard-tripwiremag'
                    }
                ]
            }, {
                name: 'Workshop Apps',
                type: 'heading',
                children: [
                    {
                        name: 'vCard App',
                        type: 'link',
                        id: 'site-templates',
                        url: '#/apps/vcard/home'
                    }
                ]
            });
        };
        return MenuFactory;
    }());
    angular.module('ngKindred')
        .service('menu', MenuFactory);
})(ngKindred || (ngKindred = {}));
