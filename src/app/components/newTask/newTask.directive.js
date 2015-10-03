(function() {
    'use strict';

    angular
        .module('testwork')
        .directive('newTask', newTask);

    /** @ngInject */
    function newTask() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/newTask/newTask.html',
            controller: NewTaskController,
            controllerAs: 'form',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NewTaskController($scope) {
            var form = this;

            form.add = function() {
                // Проверим, всё ли заполнено.
                // Если да, то отправим задачу в список
                // и создадим новую.
                // Если нет, то сообщим об этом пользователю.
            }
        }
    }

})();