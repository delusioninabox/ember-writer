import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Model | bot', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = run(() => store.createRecord('bot', {
      userWordCount: 500,
      userTime: 15
    }));
    assert.ok(model);
    assert.notEqual(model.userWordCount, model.wordCount);
  });
});
