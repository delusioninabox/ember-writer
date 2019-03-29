import Component from '@ember/component';
import EmberObject from '@ember/object';
import { computed } from '@ember/object';

export default Component.extend({
  yourText: EmberObject,
  timeRemaining: 100,
  timesUp: computed('timeRemaining', function() {
    return parseInt(this.get('timeRemaining')) === 0;
  })
});
