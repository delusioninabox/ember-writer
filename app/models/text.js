import DS from 'ember-data';
import { computed } from '@ember/object';
import moment from 'moment';

const { Model, attr } = DS;

export default Model.extend({
  textContent: attr('string'),
  wordCount: computed('textContent', function() {
    if( !this.textContent ) return;
    return this.textContent.split(" ").length;
  }),
  timeStarted: attr('date', { defaultValue: Date.now() }),
  timeFinished: attr('date', { defaultValue: Date.now() }),
  
  totalTime: computed('timeStarted', 'timeFinished', function() {
    if ( !this.timeStarted || !this.timeFinished ) return 0;
    const seconds = moment(this.timeFinished).diff( moment(this.timeStarted ), 'seconds');
    return Math.ceil( seconds / 60 );
  }),

  wordsPerMin: computed('totalTime', 'wordCount', function() {
    if( !this.totalTime || !this.wordCount ) return 0;
    return Math.ceil(this.wordCount / this.totalTime);
  })
});
