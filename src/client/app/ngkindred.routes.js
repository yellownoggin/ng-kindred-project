var ngKindred;
(function (ngKindred) {
    'use strict';
    angular
        .module('ngKindred')
        .config(initRouter);
    function initRouter($stateProvider) {
        $stateProvider
            .state('ngKindred', {
            url: '/',
            views: {
                "content": {
                    templateUrl: '/app/partials/home.html'
                }
            }
        })
            .state('ngKindred-content', {
            url: '/demos/:tmpl',
            views: {
                "content": {
                    templateUrl: function (params) {
                        var url = '/app/contents/' + params.tmpl + '/' + params.tmpl + '-demo.html';
                        console.log(url);
                        return url;
                    }
                }
            }
        })
            .state('pagetemplates', {
            url: '/page-templates/:tmpl',
            views: {
                "content": {
                    templateUrl: function (params) {
                        var url = '/app/ngkindred-page-templates/contents/' + params.tmpl + '-demo.html';
                        console.log(url);
                        return url;
                    }
                }
            }
        });
    }
})(ngKindred || (ngKindred = {}));
