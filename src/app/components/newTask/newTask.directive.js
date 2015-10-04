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
        function NewTaskController($scope, $log, taskFactory, tasksService) {
            var form = this;
            $scope.task = taskFactory();

            form.add = function() {
                if (! $scope.newTask) {
                    return false;
                }

                // Проверим, всё ли заполнено.
                if ($scope.newTask.$valid) {
                    // Если да, то отправим задачу в список
                    // и создадим новую.
                    tasksService.push($scope.task);
                    $scope.task = taskFactory();
                    $scope.newTask.$setPristine();
                    $log.debug(tasksService);
                }
                // Если нет, то сообщим об этом пользователю.
                else {
                    $log.debug('not valid');
                }
            }
        }
    }

})();