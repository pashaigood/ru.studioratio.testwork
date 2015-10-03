(function() {
  'use strict';

  angular
    .module('testwork')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
