namespace ngKindred {
    'use strict';

    angular
        .module('ngKindred')
        .config(initRouter);



    /**
     * Initialize the router's default behaviors
     */
    // @ngInject
    function initRouter($stateProvider: angular.ui.IStateProvider): void {
        // https://github.com/angular-ui/ui-router/issues/163
        $stateProvider
            .state('ngKindred', {
                url: '/',
                views: {
                    "content": {
                        // template: 'hello'
                        templateUrl: '/app/partials/home.html'
                    }
                }

            })
            .state('ngKindred-content', {
                url: '/demos/:tmpl',
                views: {
                    "content": {
                        templateUrl: function(params: angular.ui.IStateParamsService): string {
                            var url: string = '/app/contents/' + params.tmpl + '/' + params.tmpl + '-demo.html';
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
                        templateUrl: function(params: angular.ui.IStateParamsService): string {
                            var url: string = '/app/ngkindred-page-templates/contents/' + params.tmpl + '-demo.html';
                            console.log(url);
                            return url;
                        }
                    }
                }

            });
    }


}
