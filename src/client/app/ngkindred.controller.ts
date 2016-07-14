// TODO:
// better naming convention more suitable or relevant to the task and maybe in a core module(suitable module)
// check the timeout approach using stack overflow first[code check]
// need a group to work with code checks code reviews

namespace ngKindred {

    'use strict';

    class NgkindredController {
        static $inject: Array<string> = ['$state', '$scope', '$timeout', '$rootScope'];

        test: string
        usengKindredShell: boolean;
        usePageTemplatesShell: boolean;

        constructor(public state: angular.ui.IStateService, private rootScope: angular.IRootScopeService) {
            var vm = this;
            vm.test = 'Hello world';
            vm.changeTemplates();
        }

        changeTemplates() {
            this.rootScope.$on('$stateChangeStart',
                (event: any, toState: any) => {
                    console.log(toState.name, 'state name');

                    var n: number = toState.name.indexOf('ngKindred');
                    var i: number = toState.name.indexOf('pagetemplates');
                    console.log(toState.name, i);

                    if (i >= 0) {
                        this.usengKindredShell = false;
                        this.usePageTemplatesShell = true;

                    } else {
                        this.usengKindredShell = true;
                        this.usePageTemplatesShell = false;

                    }
                }

            )};

        }


    angular
        .module('ngKindred')
        .controller('NgkindredController', NgkindredController);

}
