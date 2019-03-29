import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | sprint/wordcount', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:sprint/wordcount');
    assert.ok(route);
  });
});
