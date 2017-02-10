angular.module('countdown', ['angularMoment'])
.component('clock', {
  templateUrl: 'clock.html',
  controller: function($timeout, moment) {
    var tick = () => {
      this.time = moment();
      $timeout(tick, 999);
    }
    tick();
  }
});
