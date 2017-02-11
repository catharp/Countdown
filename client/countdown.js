angular.module('countdown', ['angularMoment'])
.component('clock', {
  templateUrl: 'clock.html',
  controller: function($timeout, moment) {
    var tick = () => {
      $timeout(tick, 1000);

      this.deadline = moment().endOf('week').subtract(31, 'hours');

      this.day = this.deadline.day() - moment().day();
      this.day += this.day < 0 ? 7 : 0;

      this.hour = this.deadline.hour() - moment().hour();
      this.minute = this.deadline.minute() - moment().minute();
      this.second = this.deadline.second() - moment().second();
    }
    tick();
  }
});
