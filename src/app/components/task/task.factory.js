(function () {
    'use strict';

    angular
        .module('testwork')
        .factory('taskFactory', function(addingMinutes) {

            return function() {
                return new Task(Date.now() + addingMinutes * 60000);
            }
        });


    function Task(timestamp) {
        timestamp = timestamp || Date.now();
        var self = this;

        // В более маштабном приложении, конечно стоит
        // использовать momentjs

        // Округлим до секунд, а то некрасиво.
        var coeff = 1000 * 60;
        self.date = new Date(Math.round(timestamp / coeff) * coeff);
    }

    angular.extend(Task.prototype, {
        title: '',
        desc: '',
        date: new Date(),
        status: 0,

        /**
         * Метод обрабатывает изменние времени.
         */
        onTimeTick: function() {

        }
    });

})();
