import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  goalTime: Date.now(),
  timeRemaining: 999,
  finalResults: Array,
  timesUp: computed('timeRemaining', function() {
    return this.timeRemaining <= 0;
  })
});