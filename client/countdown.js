angular.module('countdown', ['angularMoment'])
.component('clock', {
  templateUrl: 'clock.html',
  controller: function($timeout, moment) {
    var tick = () => {
      this.deadline = moment().endOf('week').subtract(31, 'hours');
      this.day = this.deadline.day() - moment().day();
      this.hour = this.deadline.hour() - moment().hour();
      this.minute = this.deadline.minute() - moment().minute();
      this.second = this.deadline.second() - moment().second();
      $timeout(tick, 999);
    }
    tick();
  }
});
