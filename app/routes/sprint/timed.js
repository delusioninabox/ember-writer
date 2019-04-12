import Route from '@ember/routing/route';
import { later } from '@ember/runloop';
import RSVP from 'rsvp';
import moment from 'moment';

export default Route.extend({
  countdownMins: 5,
  interval: 1000,
  timeRemaining: 0,

  model(params) {
    if(!params.minutes) this.transitionTo('index');
    this.set('countdownMins', parseInt(params.minutes));
    return RSVP.hash({
      user: this.store.createRecord('text'),
      bots: [
        this.store.createRecord('bot'),
        this.store.createRecord('bot')
      ]
    });
  },

  setupController(controller, model) {
    this._super(...arguments)
    /*
      Get minute goal
      Turn into a date/time reference
    */
    const minuteGoal = this.countdownMins;
    let goal = moment( model.user.timeStarted ).add( minuteGoal, 'minutes');
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
    if (!this.interval) return;
    this.updateTimer();
  },

  /*
    Run function at interval
    Function sets time finished to current time
    Updates the time remaining (in seconds)
    If time remaining, queue function to run again
    If finished, get the results
  */
  updateTimer() {
    later(this, function() {
      const controller = this.get('controller');
      controller.set('model.user.timeFinished', Date.now());
      controller.set('timeRemaining',
        moment(controller.goalTime)
        .diff(controller.model.user.timeFinished, 's')
      );
      if (controller.timeRemaining > 0) { 
        this.updateTimer();
      } else {
        this.getResults();
      }
    }, this.interval);
  },

  getResults() {
    const controller = this.get('controller');
    let results = [ controller.model.user ];
    controller.model.bots.forEach((bot, index) => {
      controller.set(`model.bots.${index}.userWordCount`, controller.model.user.wordCount);
      controller.set(`model.bots.${index}.userTime`, controller.model.user.totalTime);
      results.push(controller.get(`model.bots.${index}`));
    });
    let sortedResults = results.sort(function(a,b) {
      return b.wordCount - a.wordCount;
  });
    controller.set('finalResults', sortedResults);
  }
});
