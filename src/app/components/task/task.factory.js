(function () {
    'use strict';

    angular
        .module('testwork')
        .factory('taskFactory', function (addingMinutes, oneMinute, addingMinutesBeforeRemove) {


            function Task(data) {
                data.date = new Date(data.date);

                var self = this;
                angular.extend(self, data);

                // В более маштабном приложении, конечно стоит
                // использовать momentjs

                // Округлим до секунд, а то некрасиво.
                var coeff =  oneMinute / 60;
                self.date = new Date(Math.round(self.date / coeff) * coeff);
            }

            angular.extend(Task.prototype, {
                title: '',
                desc: '',
                status: 0,

                /**
                 * Метод обрабатывает изменние времени.
                 */
                check: function (timestamp) {
                    var self = this;
                    timestamp = timestamp || Date.now();

                    if (timestamp > self.date.getTime()) {
                        switch (self.status) {
                            case 0: // Помечаем на удаление и добавляем 2 минуты.
                                self.addMinutes(addingMinutesBeforeRemove, timestamp);
                                self.status = 1;
                                return true;
                            case 1: // Нас уже ничего не спасёт, сообщаем, что нас можно удалять.
                                return false;
                        }
                    }

                    return true;
                },

                addMinutes: function(amount, timestamp) {
                    var self = this;
                    timestamp = timestamp || self.date.getTime();
                    self.date = new Date(timestamp + amount * oneMinute);
                    self.status = 0;
                }
            });

            return function (data) {
                // Поумолчанию время равно сейчас + 10 минут (addingMinutes)
                data = data || {
                    date: Date.now() + addingMinutes * oneMinute
                };
                return new Task(data);
            }
        });

})();
