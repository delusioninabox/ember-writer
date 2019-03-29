import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

const { Model, attr } = DS;

export default Model.extend({
  textContent: attr('string'),
  wordCount: computed('textContent', function() {
    if( !this.get('textContent') ) return;
    return this.get('textContent').split(" ").length;
  }),
  timeStarted: attr('date', { defaultValue: Date.now() }),
  timeFinished: attr('date', { defaultValue: Date.now() }),
  
  totalTime: computed('timeStarted', 'timeFinished', function() {
    if ( !this.get('timeStarted') || !this.get('timeFinished') ) return;
    return moment(this.get('timeFinished')).diff( moment(this.get('timeStarted') ), 'minutes')
  }),

  wordsPerMin: computed('totalTime', 'wordCount', function() {
    if( !this.get('totalTime') || !this.get('wordCount') ) return 0;
    return Math.ceil(this.get('wordCount') / this.get('totalTime'));
  })
});
