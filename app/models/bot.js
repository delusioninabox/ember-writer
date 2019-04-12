import DS from 'ember-data';
import { computed } from '@ember/object';

const { Model, attr } = DS;

export default Model.extend({
  userWordCount: attr('number'),
  userTime: attr('number'),
  
  /* 
    a bot's word count is based on the random WPM
  */
  wordCount: computed('wordsPerMin', 'userTime', function() {
    if( !this.wordsPerMin ) return 0;
    return Math.ceil( this.wordsPerMin * this.userTime );
  }),


  /* 
    a bot's word per minute is random
    within -20/+20 of the writer's
  */
  wordsPerMin: computed('userWordCount', 'userTime', function() {
    if( !this.userWordCount || !this.userTime ) return 0;
    const userWordPerMin = Math.ceil(this.userWordCount / this.userTime);
    const max = userWordPerMin + 20;
    let min = userWordPerMin - 20;
    if( min < 25) min = 25;
    return Math.floor(Math.random() * (max - min)) + min;
  })
});
