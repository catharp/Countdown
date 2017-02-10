angular.module('countdown', ['angularMoment'])
.component('clock', {
  templateUrl: 'clock.html',
  controller: function($timeout, moment) {
    var tick = () => {
      this.day = moment().day();
      this.hour = moment().hour();
      this.minute = moment().minute();
      this.second = moment().second();
      $timeout(tick, 999);
    }
    tick();
  }
});
