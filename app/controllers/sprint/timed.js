import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  goalTime: Date.now(),
  timeRemaining: 60,
  timesUp: computed('timeRemaining', function() {
    return this.get('timeRemaining') <= 0;
  })
});