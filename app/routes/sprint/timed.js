import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
import moment from 'moment';

export default Route.extend({
  countdownMins: 0.5,
  interval: 1000,
  timeRemaining: 0,

  model() {
    return this.store.createRecord('text');
  },

  setupController(controller, model) {
    this._super(...arguments)
    const minuteGoal = this.get('countdownMins');
    let goal = moment( model.get('timeStarted') ).add( minuteGoal, 'minutes');
    controller.set('goalTime', goal);
    this.startTimer();
  },

  startTimer() {
    if(this.get('interval')) {
      this.updateTimer();
    }
  },

  updateTimer() {
    later(this, function() {
      const controller = this.get('controller');
      controller.set('model.timeFinished', Date.now());
      controller.set('timeRemaining',
        moment(controller.get('goalTime'))
        .diff(controller.get('model.timeFinished'), 's')
      );
      if( 
        controller.get('timeRemaining') > 0
      ) { 
        this.updateTimer();
      }
    }, this.get('interval'));
  }
});
