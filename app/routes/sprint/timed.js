import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
import moment from 'moment';

export default Route.extend({
  countdownMins: 5,
  interval: 1000,
  timeRemaining: 0,

  model() {
    // TO DO: set countdown minutes from param
    return this.store.createRecord('text');
  },

  setupController(controller, model) {
    this._super(...arguments)
    /*
      Get minute goal
      Turn into a date/time reference
    */
    const minuteGoal = this.get('countdownMins');
    let goal = moment( model.get('timeStarted') ).add( minuteGoal, 'minutes');
    controller.set('goalTime', goal);
    /*
      Start running timer countdown
    */
    this.startTimer();
  },


  /*
    Begin timer loop if interval exists
  */
  startTimer() {
    if (!this.get('interval')) return;
    this.updateTimer();
  },

  /*
    Run function at interval
    Function sets time finished to current time
    Updates the time remaining (in seconds)
    If time remaining, queue function to run again
  */
  updateTimer() {
    later(this, function() {
      const controller = this.get('controller');
      controller.set('model.timeFinished', Date.now());
      controller.set('timeRemaining',
        moment(controller.get('goalTime'))
        .diff(controller.get('model.timeFinished'), 's')
      );
      if (controller.get('timeRemaining') > 0) { 
        this.updateTimer();
      }
    }, this.get('interval'));
  }
});
