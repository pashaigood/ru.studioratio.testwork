(function() {
    'use strict';

    //TODO: Загружаем данные из локального хранилища.

    angular
        .module('testwork')
        .service('tasksService', function($localStorage, taskFactory) {
            $localStorage.$default({
                tasks: []
            });

            var cnt = $localStorage.tasks.length;

            while (--cnt > -1) {
                $localStorage.tasks[cnt] = taskFactory($localStorage.tasks[cnt]);
            }

            return $localStorage.tasks;
        });
})();