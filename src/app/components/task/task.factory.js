(function () {
    'use strict';

    angular
        .module('testwork')
        .factory('taskFactory', function(addingMinutes) {

            return function(data) {
                // Поумолчанию время равно сейчас + 10 минут (addingMinutes)
                data = data || {
                    date: Date.now() + addingMinutes * 60000
                };
                return new Task(data);
            }
        });


    function Task(data) {
        data.date = new Date(data.date);

        var self = this;
        angular.extend(self, data);

        // В более маштабном приложении, конечно стоит
        // использовать momentjs

        // Округлим до секунд, а то некрасиво.
        var coeff = 1000 * 60;
        self.date = new Date(Math.round(self.date / coeff) * coeff);
    }

    angular.extend(Task.prototype, {
        title: '',
        desc: '',
        status: 0,

        /**
         * Метод обрабатывает изменние времени.
         */
        onTimeTick: function() {

        }
    });

})();
