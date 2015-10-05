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
        function TasksController($scope, tasksService, addingMinutes) {

            $scope.tasks = tasksService;

            /**
             * Удаляет задачу
             */
            $scope.remove = function(task) {}

            /**
             * Продлевает задачу
             */
            $scope.addMinutes = function(task) {}
        }
    }

})();
