angular.module('countdown', [])
.component('clock', {
  templateUrl: 'clock.html',
  controller: function($timeout) {
    var tick = () => {
      this.time = Date.now();
      $timeout(tick, 999);
    }
    tick();
  }
});
