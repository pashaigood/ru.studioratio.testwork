(function() {
  'use strict';

  angular
    .module('ruStudiorationTestwork')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
