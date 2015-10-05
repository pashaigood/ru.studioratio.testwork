(function() {
    'use strict';

    angular
        .module('testwork')
        .directive('tasks', tasks);

    /** @ngInject */
    function tasks() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/tasks/tasks.html',
            controller: TasksController,
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function TasksController($scope, $interval, tasksService, addingMinutes) {


            $scope.tasks = tasksService;
            $scope.timestamp = Date.now();


            function init() {
                // Выполним первую проверку
                // и заведём таймер.
                onTimerTick();
                $interval(onTimerTick, 1000);
            }


            /**
             * Удаляет задачу
             */
            $scope.remove = function(task) {
                var index = $scope.tasks.indexOf(task);
                if (index > -1) {
                    $scope.tasks.splice(index, 1);
                }
            };

            /**
             * Продлевает задачу
             */
            $scope.addMinutes = function(task, amount) {
                amount = amount || addingMinutes;
                task.addMinutes(amount);
            };

            function onTimerTick() {
                $scope.timestamp = Date.now();
                // Проверим все задачи.
                // Если какая из них истекала, то удалим её.
                var cnt = $scope.tasks.length;

                while (--cnt > -1) {
                    if (! $scope.tasks[cnt].check($scope.timestamp)) {
                        $scope.remove($scope.tasks[cnt]);
                    }
                }
            }

            init();
        }
    }

})();
