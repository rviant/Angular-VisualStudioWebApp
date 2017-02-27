(function () {
    'use strict';

    angular
        .module('app')
        .controller('Main', Main);

    Main.$inject = [];

    function Main() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'Angular Example for Freddy';
        vm.food = '';

        init();

        function init() {
            console.log("Controller started");

        }
    }
})();
