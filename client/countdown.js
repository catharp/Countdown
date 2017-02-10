angular.module('countdown', [])
.component('clock', {
  template: 'Time:  {{ $ctrl.time }}',
  controller: function($timeout) {
    var tick = () => {
      this.time = Date.now();
      $timeout(tick, 999);
    }
    tick();
  }
});
